import actionType from './action-type';

const { FETCH_SUCCESS } = actionType;

export default function reducer(state, action) {
  const { type } = action;
  switch (type) {
    case FETCH_SUCCESS: {
      return action.data;
    }
    default:
      return state;
  }
}
