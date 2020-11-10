import actionType from './action-type';

export default {
  fetchSuccess(data) {
    return {
      type: actionType.FETCH_SUCCESS,
      data,
    };
  },
};
