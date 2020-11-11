import { useState } from 'react';

const initialSideState = {
  milestoneId: null,
  authorId: null,
  assigneeId: null,
  labels: new Set(),
};

const useFilter = () => {
  const [state, setState] = useState(initialSideState);
  const updateMilestone = (id) => {
    const { milestoneId } = state;
    if (milestoneId === id) setState({ ...state, milestoneId: null });
    else setState({ ...state, milestoneId: id });
  };
  const updateAuthor = (id) => {
    const { authorId } = state;
    if (authorId === id) setState({ ...state, authorId: null });
    else setState({ ...state, authorId: id });
  };
  const updateAssignee = (id) => {
    const { assigneeId } = state;
    if (assigneeId === id) setState({ ...state, assigneeId: null });
    else setState({ ...state, assigneeId: id });
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
