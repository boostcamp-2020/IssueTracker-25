import actionType from './issueAction';

const {
  FETCH_SUCCESS,
  FETCH_ERROR,
  CHECK_ALL_ISSUE_HANDLER,
  CHECK_ISSUE_HANDLER,
} = actionType;

export default function reducer(state, action) {
  const { type } = action;
  const { issues, allIssue } = state;
  switch (type) {
    case FETCH_SUCCESS: {
      const { issueItems } = action;
      return {
        ...state,
        loading: false,
        issues: issueItems.map((issue) => {
          return { ...issue, checked: false };
        }),
      };
    }
    case FETCH_ERROR: {
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    }
    case CHECK_ALL_ISSUE_HANDLER: {
      const updatedAllIssues = setAllIssueChecked(issues, !allIssue);
      return {
        issues: updatedAllIssues,
        allIssue: !allIssue,
      };
    }
    case CHECK_ISSUE_HANDLER: {
      const { id } = action;
      const updatedOneIssue = toggleIssue(issues, id);
      return {
        issues: updatedOneIssue,
        allIssue: isAllChecked(updatedOneIssue),
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
