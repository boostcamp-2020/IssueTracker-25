import { useState } from 'react';
import utils from '../libs/utils';

const initialSideState = {
  milestoneId: null,
  assignees: new Set(),
  labels: new Set(),
};

const useSidebar = () => {
  const [state, setState] = useState(initialSideState);
  const updateMilestone = ({ id }) => {
    utils.toggleStateIfEqual({
      state,
      setState,
      value: id,
      key: 'milestoneId',
    });
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
  const updateAssignee = ({ id }) => {
    const type = 'assignees';
    updateSet({ type, id });
  };
  const updateLabel = ({ id }) => {
    const type = 'labels';
    updateSet({ type, id });
  };
  return {
    state,
    handlers: { updateAssignee, updateMilestone, updateLabel },
  };
};

export default useSidebar;
