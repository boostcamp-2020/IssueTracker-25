import { useState } from 'react';
import utils from '../libs/utils';

const initialSideState = {
  milestoneId: null,
  authorId: null,
  assigneeId: null,
  labels: new Set(),
};

const useFilter = () => {
  const [state, setState] = useState(initialSideState);
  const updateMilestone = (id) => {
    utils.toggleStateIfEqual({
      state,
      setState,
      value: id,
      key: 'milestoneId',
    });
  };
  const updateAuthor = (id) => {
    utils.toggleStateIfEqual({ state, setState, value: id, key: 'authorId' });
  };
  const updateAssignee = (id) => {
    utils.toggleStateIfEqual({ state, setState, value: id, key: 'assigneeId' });
  };

  const updateSet = ({ type, id }) => {
    const target = state[type];
    if (target.has(id)) {
      setState({
        ...state,
        [type]: new Set([...target].filter((userId) => userId !== id)),
      });
    } else {
      setState({ ...state, [type]: new Set([...target, id]) });
    }
  };
  const updateLabel = (id) => {
    const type = 'labels';
    updateSet({ type, id });
  };
  return {
    state,
    handlers: { updateAssignee, updateMilestone, updateLabel, updateAuthor },
  };
};

export default useFilter;
