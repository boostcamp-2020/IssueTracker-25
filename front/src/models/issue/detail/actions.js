import actionType from './action-type';

const {
  FETCH_SUCCESS,
  REGISTER_COMMENT,
  SUCCESS_UPDATE_TITLE,
  UPDATE_ONE_STATE,
  SUCCESS_UPDATE_CONTENTS,
  CHANGE_CLOSED_STATUS,
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
  updateComment(comment) {
    return {
      type: REGISTER_COMMENT,
      comment,
    };
  },
  successUpdateContents() {
    return {
      type: SUCCESS_UPDATE_CONTENTS,
    };
  },
  updateClosedStatus(isClosed, closedAt) {
    return {
      type: CHANGE_CLOSED_STATUS,
      isClosed,
      closedAt,
    };
  },
};
