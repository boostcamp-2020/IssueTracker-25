import { Op } from 'sequelize';

const isObject = (target) => typeof target === 'object';
const changeAtom = (target) => target[target.length - 1];
const changeLowerCase = (target) => target.toLowerCase();

const openAndCloseParser = (target) => {
  const target2LowerCase = changeLowerCase(target);
  const options = {
    open: false,
    closed: true,
  };
  const option = options[target2LowerCase];
  if (option === undefined || option === null) return {};
  return { isClosed: option };
};

const nopParser = (target, whereOptions) => {
  const ABLE_KEY = {
    label: { id: [] },
    assignee: { id: 0 },
    milestone: { id: 0 },
  };
  if (isObject(target)) {
    const reducer = (options, key) => {
      const option = ABLE_KEY[key];
      if (!option) return options;
      const newOptions = { ...options, [key]: { ...ABLE_KEY[key] } };
      return newOptions;
    };
    return target.map(changeLowerCase).reduce(reducer, whereOptions);
  }
  const key = changeLowerCase(target);
  const option = ABLE_KEY[key];
  if (!option) return whereOptions;
  return { ...whereOptions, [key]: { ...ABLE_KEY[key] } };
};

const defaultOpen = (query, whereOptions) => {
  const { page, is } = query;
  if (!page && !is) {
    return { ...whereOptions, open: { isClosed: false } };
  }
  return whereOptions;
};
const filterParser = ({ query, myName }) => {
  let whereOptions = {
    open: {},
    author: {},
    assignee: {},
    milestone: {},
    label: {},
  };
  const exchangeMe = (target) => (target === '@me' ? myName : target);
  const callback = (key) => {
    const value = query[key];
    const target = isObject(value) ? changeAtom(value) : value;

    switch (key) {
      case 'is': {
        whereOptions.open = openAndCloseParser(target);
        break;
      }
      case 'milestone': {
        whereOptions.milestone = { title: target };
        break;
      }
      case 'label': {
        whereOptions.label = {
          name: isObject(value) ? { [Op.in]: value } : value,
        };
        break;
      }
      case 'assignee':
      case 'author': {
        whereOptions[key] = { name: exchangeMe(target) };
        break;
      }
      case 'no': {
        whereOptions = nopParser(value, whereOptions);
        break;
      }
      default:
    }
  };

  Object.keys(query).map(changeLowerCase).forEach(callback);
  whereOptions = defaultOpen(query, whereOptions);
  return whereOptions;
};
export default filterParser;
