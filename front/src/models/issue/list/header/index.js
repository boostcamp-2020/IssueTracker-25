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

  return (
    <IssueListHeaderContainer
      checkAllIssue={checkAllIssue}
      allCheckBoxClickHandler={allCheckBoxClickHandler}
      labels={labelState}
      milestones={milestoneState}
      users={userState}
      filterState={filterState}
      filterHandler={filterHandler}
    />
  );
};

export default IssueListHeader;
