import actionType from './action-type';

const {
  FETCH_SUCCESS,
  SHOW_EDIT_ISSUE_HEADER,
  UPDATE_TITLE,
  SUCCESS_UPDATE_TITLE,
} = actionType;

export default function reducer(state, action) {
  const { type } = action;
  switch (type) {
    case FETCH_SUCCESS: {
      const { data } = action;
      return {
        ...state,
        issue: data,
        countOfComments: data.Comments.length,
      };
    }
    case SHOW_EDIT_ISSUE_HEADER: {
      const { showStatus } = action;
      return {
        ...state,
        showEditIssueHeader: showStatus,
      };
    }
    case UPDATE_TITLE: {
      const { newTitle } = action;
      return {
        ...state,
        newTitle,
      };
    }
    case SUCCESS_UPDATE_TITLE: {
      return {
        ...state,
        issue: { ...state.issue, title: state.newTitle },
        newTitle: '',
        showEditIssueHeader: false,
      };
    }
    default:
      return state;
  }
}
