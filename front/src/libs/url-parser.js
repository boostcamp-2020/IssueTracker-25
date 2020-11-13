import queryString from 'query-string';

export const decodeFilter = (target) =>
  target.replace(/:/g, '=').replace(/[ *]/g, '&');
export const encodeFilter = (target) =>
  target.replace(/=/g, ':').replace(/&/g, ' ');
export const isObject = (target) => typeof target === 'object';
export const changeAtom = (target) => target[target.length - 1];
export const changeLowerCase = (target) => target.toLowerCase();
export const parser = (query) => {
  const queries = queryString.parse(query);
  return Object.keys(queries)
    .map(changeLowerCase)
    .reduce((acc, key) => {
      const value = queries[key];
      if (!value) return acc;
      if (key === 'label') {
        if (isObject(value)) {
          acc[key] = new Set(value);
        } else acc[key] = new Set([value]);
        return acc;
      }
      const target = isObject(value) ? changeAtom(value) : value;
      if (key === 'page') return acc;
      acc[key] = target;
      return acc;
    }, {});
};

export const getPage = (location) => {
  const FIRST_PAGE = 1;
  const { page: currentPage } = queryString.parse(location.search);
  return currentPage || FIRST_PAGE;
};
export const getFilter = (location) => {
  const queries = queryString.parse(location.search);
  const excludePageQuery = Object.keys(queries).reduce((acc, query) => {
    if (query !== 'page') acc[query] = queries[query];
    return acc;
  }, {});
  return queryString.stringify(excludePageQuery);
};
