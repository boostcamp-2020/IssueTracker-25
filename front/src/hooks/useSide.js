import { useState } from 'react';

const initialSideState = {
  milestoneId: null,
  assignees: new Set(),
  labels: new Set(),
};

const useSide = () => {
  const [state, setState] = useState(initialSideState);
  const updateMilestone = (id) => {
    const { milestoneId } = state;
    if (milestoneId === id) setState({ ...state, milestoneId: null });
    else setState({ ...state, milestoneId: id });
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
  const updateAssignees = (id) => {
    const type = 'assignees';
    updateSet({ type, id });
  };
  const updatelabels = (id) => {
    const type = 'labels';
    updateSet({ type, id });
  };
  return {
    state,
    handlers: { updateAssignees, updateMilestone, updatelabels },
  };
};

export default useSide;
