import actionType from './action-type';

const { FETCH_SUCCESS } = actionType;

export default function reducer(state, action) {
  const { type, data } = action;
  switch (type) {
    case FETCH_SUCCESS: {
      const issue = data;
      return {
        issue,
        countOfComments: issue.Comments.length,
      };
    }
    default:
      return state;
  }
}
