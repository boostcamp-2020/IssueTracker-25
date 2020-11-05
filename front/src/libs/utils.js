import moment from 'moment';

export default {
  countFilteredElement(list, condition) {
    const filteredList = list.filter((element) => condition(element));
    return filteredList.length;
  },
  getFilteredElement(list, condition) {
    return list.filter((element) => condition(element));
  },
  timeDiffFromNow(date) {
    return moment(date).fromNow();
  },
};
