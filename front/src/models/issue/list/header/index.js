import React from 'react';
import { useAsync } from '../../../../hooks/useAsync';
import reducer from './reducer';
import labelApi from '../../../../apis/label';
import milestoneApi from '../../../../apis/milestone';
import usersApi from '../../../../apis/user';
import IssueListHeaderContainer from '../../../../components/issue/list/header';

const selectedAssignee = 1;
const selectedAuthor = 1;
const selectedMilestone = 1;
const selectedLabels = new Set([1, 2]);

const IssueListHeader = ({ checkAllIssue, allCheckBoxClickHandler }) => {
  // const { updateMilestone, updateLabel, updateAssignee } = handlers;

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

  const { state: userState, fetchStatus: userFetchStatus } = useAsync({
    api: usersApi.getUsers,
    reducer,
    deps: [],
    initialState: [],
  });

  if (
    userFetchStatus.error ||
    milestoneFetchStatus.error ||
    labelFetchStatus.error
  ) {
    return <div>error</div>;
  }
  if (
    userFetchStatus.loading ||
    milestoneFetchStatus.loading ||
    labelFetchStatus.loading
  ) {
    return <div>로딩중</div>;
  }
  if (
    userFetchStatus.loading ||
    milestoneFetchStatus.loading ||
    labelFetchStatus.loading
  ) {
    return null;
  }

  const handler = (id) => {
    alert(`click ${id}`);
  };
  return (
    <IssueListHeaderContainer
      checkAllIssue={checkAllIssue}
      allCheckBoxClickHandler={allCheckBoxClickHandler}
      labels={labelState}
      milestones={milestoneState}
      users={userState}
      selectedAssigneeId={selectedAssignee}
      selectedAuthorId={selectedAuthor}
      selectedMilestoneId={selectedMilestone}
      selectedLabelSet={selectedLabels}
      milestoneSelectHandler={handler}
      labelSelectHandler={handler}
      assigneeSelectHandler={handler}
      authorSelectHandler={handler}
    />
  );
};

export default IssueListHeader;
