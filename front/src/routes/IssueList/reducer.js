import actionType from './action-type';

const {
  FETCH_SUCCESS,
  FETCH_ERROR,
  CHECK_ALL_ISSUE_HANDLER,
  CHECK_ISSUE_HANDLER,
  ISSUE_LIST_PAGING,
} = actionType;

export default function reducer(state, action) {
  const { type } = action;
  const { issues, checkAllIssue } = state;
  switch (type) {
    case FETCH_SUCCESS: {
      const { issues: filteredIssues, page, lastPage } = action;
      return {
        ...state,
        loading: false,
        issues: setAllIssueChecked(filteredIssues, false),
        page,
        lastPage,
      };
    }
    case FETCH_ERROR: {
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    }
    case ISSUE_LIST_PAGING: {
      const { moveTo } = action;
      return {
        ...state,
        page: moveTo,
      };
    }
    case CHECK_ALL_ISSUE_HANDLER: {
      const updatedAllIssues = setAllIssueChecked(issues, !checkAllIssue);
      return {
        ...state,
        issues: updatedAllIssues,
        checkAllIssue: !checkAllIssue,
      };
    }
    case CHECK_ISSUE_HANDLER: {
      const { id } = action;
      const updatedOneIssue = toggleIssue(issues, id);
      return {
        ...state,
        issues: updatedOneIssue,
        checkAllIssue: isAllChecked(updatedOneIssue),
      };
    }
    default:
      return state;
  }
}

const setAllIssueChecked = (issues, value) =>
  issues.map((issue) => ({ ...issue, checked: value }));

const isAllChecked = (issues) =>
  issues.every((issue) => issue.checked === true);

const toggleIssue = (issues, id) => {
  return issues.map((issue) => {
    if (+issue.id === +id) {
      return {
        ...issue,
        checked: !issue.checked,
      };
    }
    return issue;
  });
};
