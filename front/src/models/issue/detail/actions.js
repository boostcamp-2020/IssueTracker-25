import actionType from './action-type';

const {
  FETCH_SUCCESS,
  SUCCESS_UPDATE_TITLE,
  UPDATE_ONE_STATE,
  SUCCESS_UPDATE_CONTENTS,
} = actionType;

export default {
  fetchSuccess(data) {
    return {
      type: FETCH_SUCCESS,
      data,
    };
  },
  updateOneState(targetState, newValue) {
    return {
      type: UPDATE_ONE_STATE,
      newValue,
      targetState,
    };
  },
  successUpdateTitle() {
    return {
      type: SUCCESS_UPDATE_TITLE,
    };
  },
  successUpdateContents() {
    return {
      type: SUCCESS_UPDATE_CONTENTS,
    };
  },
};
