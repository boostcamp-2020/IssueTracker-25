import actionType from './action-type';
import utils from '../../libs/utils';

const {
  FETCH_SUCCESS,
  FETCH_ERROR,
  CHECK_ALL_ISSUE_HANDLER,
  CHECK_ISSUE_HANDLER,
} = actionType;

export default function reducer(state, action) {
  const { type } = action;
  const { filteredIssues, checkAllIssue } = state;
  switch (type) {
    case FETCH_SUCCESS: {
      const { issueItems } = action;
      const openedIssues = utils.getFilteredElement(
        issueItems,
        (issue) => !issue.isClosed,
      );
      return {
        ...state,
        loading: false,
        issues: [...issueItems],
        filteredIssues: openedIssues.map((issue) => ({
          ...issue,
          checked: false,
        })),
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
      const updatedAllIssues = setAllIssueChecked(
        filteredIssues,
        !checkAllIssue,
      );
      return {
        ...state,
        filteredIssues: updatedAllIssues,
        checkAllIssue: !checkAllIssue,
      };
    }
    case CHECK_ISSUE_HANDLER: {
      const { id } = action;
      const updatedOneIssue = toggleIssue(filteredIssues, id);
      return {
        ...state,
        filteredIssues: updatedOneIssue,
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
