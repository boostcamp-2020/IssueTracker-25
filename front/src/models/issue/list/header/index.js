import React from 'react';
import { useAsync } from '../../../../hooks/useAsync';
import reducer from './reducer';
import labelApi from '../../../../apis/label';
import milestoneApi from '../../../../apis/milestone';
import usersApi from '../../../../apis/user';
import IssueListHeaderContainer from '../../../../components/issue/list/header';

const IssueListHeader = ({
  checkAllIssue,
  allCheckBoxClickHandler,
  filterState,
  filterHandler,
}) => {
  const {
    updateMilestone,
    updateLabel,
    updateAssignee,
    updateAuthor,
  } = filterHandler;
  const {
    milestoneId: selectedMilestoneId,
    authorId: selectedAuthorId,
    assigneeId: selectedAssigneeId,
    labels: selectedLabelSet,
  } = filterState;

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
    return null;
  }

  return (
    <IssueListHeaderContainer
      checkAllIssue={checkAllIssue}
      allCheckBoxClickHandler={allCheckBoxClickHandler}
      labels={labelState}
      milestones={milestoneState}
      users={userState}
      selectedAssigneeId={selectedAssigneeId}
      selectedAuthorId={selectedAuthorId}
      selectedMilestoneId={selectedMilestoneId}
      selectedLabelSet={selectedLabelSet}
      milestoneSelectHandler={updateMilestone}
      labelSelectHandler={updateLabel}
      assigneeSelectHandler={updateAssignee}
      authorSelectHandler={updateAuthor}
    />
  );
};

export default IssueListHeader;
