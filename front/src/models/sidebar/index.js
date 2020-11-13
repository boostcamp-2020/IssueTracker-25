import React, { useContext } from 'react';
import { useAsync } from '../../hooks/useAsync';
import { userContext } from '../../contexts/user';
import reducer from './reducer';
import labelApi from '../../apis/label';
import milestoneApi from '../../apis/milestone';
import usersApi from '../../apis/user';
import SidebarContainer from '../../components/commons/sidebar/SidebarContainer';

const Sidebar = ({ handlers, selected }) => {
  const {
    state: { id: userId },
  } = useContext(userContext);
  const { updateMilestone, updateLabel, updateAssignee } = handlers;
  const {
    milestoneId: selectedMilestone,
    assignees: selectedAssignees,
    labels: selectedLabels,
  } = selected;

  const { state: labelState, fetchStatus: labelFetchStatus } = useAsync({
    api: labelApi.getLabels,
    reducer,
    deps: [],
    initialState: [],
  });

  const { state: milestoneState, fetchStatus: milestoneFetchStatus } = useAsync(
    {
      api: milestoneApi.getMilestones,
      reducer,
      deps: [],
      initialState: [],
    },
  );

  const { state: assigneeState, fetchStatus: assigneeFetchStatus } = useAsync({
    api: usersApi.getUsers,
    reducer,
    deps: [],
    initialState: [],
  });

  if (
    assigneeFetchStatus.error ||
    milestoneFetchStatus.error ||
    labelFetchStatus.error
  ) {
    return <div>error</div>;
  }

  return (
    <SidebarContainer
      userId={userId}
      labels={labelState}
      milestones={milestoneState}
      assignees={assigneeState}
      milestoneSelectHandler={updateMilestone}
      labelSelectHandler={updateLabel}
      assigneeSelectHandler={updateAssignee}
      selectedAssignees={selectedAssignees}
      selectedMilestone={selectedMilestone}
      selectedLabels={selectedLabels}
    />
  );
};

export default Sidebar;
