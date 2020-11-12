import actionType from './action-type';

const {
  FETCH_SUCCESS,
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
