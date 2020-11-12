import actionType from './action-type';

const {
  FETCH_SUCCESS,
  SHOW_EDIT_ISSUE_HEADER,
  UPDATE_TITLE,
  SUCCESS_UPDATE_TITLE,
} = actionType;
export default {
  fetchSuccess(data) {
    return {
      type: FETCH_SUCCESS,
      data,
    };
  },
  showEditIssueHeader(showStatus) {
    return {
      type: SHOW_EDIT_ISSUE_HEADER,
      showStatus,
    };
  },
  updateTitle(newTitle) {
    return {
      type: UPDATE_TITLE,
      newTitle,
    };
  },
  successUpdateTitle() {
    return {
      type: SUCCESS_UPDATE_TITLE,
    };
  },
};
