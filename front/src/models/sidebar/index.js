import React from 'react';
import { useAsync } from '../../hooks/useAsync';
import labelReducer from './label-reducer';
import milestoneReducer from './milestone-reducer';
import assigneeReducer from './assignee-reducer';
import labelApi from '../../apis/label';
import milestoneApi from '../../apis/milestone';
import usersApi from '../../apis/user';
import SidebarContainer from '../../components/commons/sidebar/SidebarContainer';

const selectedAssignees = new Set([1, 2]);
const selectedMilestone = 1;
const selectedLabels = new Set([1, 2, 4]);

const Sidebar = ({ handlers }) => {
  const { updateMilestone, updateLabel, updateAssignee } = handlers;

  const { state: labelState, fetchStatus: labelFetchStatus } = useAsync({
    api: labelApi.getLabels,
    reducer: labelReducer,
    deps: [],
    initialState: [],
  });

  const { state: milestoneState, fetchStatus: milestoneFetchStatus } = useAsync(
    {
      api: milestoneApi.getMilestones,
      reducer: milestoneReducer,
      deps: [],
      initialState: [],
    },
  );

  const { state: assigneeState, fetchStatus: assigneeFetchStatus } = useAsync({
    api: usersApi.getUsers,
    reducer: assigneeReducer,
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
  if (
    assigneeFetchStatus.loading ||
    milestoneFetchStatus.loading ||
    labelFetchStatus.loading
  ) {
    return null;
  }

  return (
    <SidebarContainer
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
