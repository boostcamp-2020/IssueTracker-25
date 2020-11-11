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
  isEmpty(object) {
    return Object.keys(object).length === 0 && object.constructor === Object;
  },
  getProgressRate(start, end) {
    const startDate = moment(start);
    const endDate = moment(end);
    const now = moment();
    if (this.isTimePassedFromNow(end)) {
      return 100;
    }
    if (startDate.diff(endDate) >= 0) {
      throw new Error('getProgressRate ERROR: 시작 시간이 끝 시간보다 큽니다.');
    }
    const rangeFromStartToEnd = endDate.diff(startDate);
    const rangeFromStartToNow = now.diff(startDate);
    return Math.floor((rangeFromStartToNow / rangeFromStartToEnd) * 100);
  },
  isTimePassedFromNow(date) {
    const now = moment();
    if (moment(date).diff(now) >= 0) {
      return false;
    }
    return true;
  },
  toggleStateIfEqual({ state, setState, value, key }) {
    if (state[key] === value) {
      setState({ ...state, [key]: null });
    } else {
      setState({ ...state, [key]: value });
    }
  },
};
