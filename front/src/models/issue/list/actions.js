import actionType from './action-type';

export default {
  fetchSuccess(data) {
    return {
      type: actionType.FETCH_SUCCESS,
      data,
    };
  },
  issueListPaging(moveTo) {
    return {
      type: actionType.ISSUE_LIST_PAGING,
      moveTo,
    };
  },
  checkIssueHandler(id) {
    return {
      type: actionType.CHECK_ISSUE_HANDLER,
      id,
    };
  },
  checkAllIssueHandler() {
    return {
      type: actionType.CHECK_ALL_ISSUE_HANDLER,
    };
  },
};
