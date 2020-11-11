import React from 'react';
import { useParams } from 'react-router-dom';
import {
  IssueDetailHeader,
  IssueDetailBody,
} from '../../../components/issue/detail';

import issueAPI from '../../../apis/issue';
import utils from '../../../libs/utils';
import { useAsync } from '../../../hooks/useAsync';
import useSidebar from '../../../hooks/useSidebar';
import reducer from './reducer';

const initialState = {
  issue: {},
  countOfComments: undefined,
};

const IssueDetailPage = () => {
  const { id } = useParams();
  const getIssueApi = () => issueAPI.getIssue(id);
  const { state: seletedState, handlers } = useSidebar();
  const { state, fetchStatus } = useAsync({
    api: getIssueApi,
    reducer,
    initialState,
  });

  const { issue } = state;
  const { error, loading } = fetchStatus;

  if (error) {
    return <div>{error}</div>;
  }
  if (loading) {
    return null;
  }

  return (
    !utils.isEmpty(issue) && (
      <>
        <IssueDetailHeader issue={issue} />
        <IssueDetailBody
          issue={issue}
          seletedState={seletedState}
          handlers={handlers}
        />
      </>
    )
  );
};

export default IssueDetailPage;
