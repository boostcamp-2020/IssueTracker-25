import actionType from './action-type';

const {
  FETCH_SUCCESS,
  REGISTER_COMMENT,
  SUCCESS_UPDATE_TITLE,
  UPDATE_ONE_STATE,
  SUCCESS_UPDATE_CONTENTS,
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
    case UPDATE_ONE_STATE: {
      const { newValue, targetState } = action;
      return {
        ...state,
        [targetState]: newValue,
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
    case REGISTER_COMMENT: {
      const { issue } = state;
      return {
        ...state,
        issue: {
          ...issue,
          Comments: [...issue.Comments, action.comment],
        },
      };
    }
    case SUCCESS_UPDATE_CONTENTS: {
      return {
        ...state,
        issue: { ...state.issue, contents: state.newContents },
        newContents: '',
        showEditIssueDetail: false,
      };
    }
    default:
      return state;
  }
}
