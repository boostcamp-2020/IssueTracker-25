import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import {
  IssueDetailHeader,
  IssueDetailBody,
  IssueDetailFooter,
} from '../../../components/issue/detail';

import SidebarLayout from '../../../components/commons/SidebarLayout';
import Sidebar from '../../sidebar';
import { userContext } from '../../../contexts/user';
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
  const {
    state: { profileLink },
  } = useContext(userContext);

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
        <SidebarLayout.BaseLayout>
          <SidebarLayout.Content>
            <>
              <IssueDetailHeader issue={issue} />
              <IssueDetailBody issue={issue} />
              <IssueDetailFooter
                isClosed={issue.isClosed}
                profileLink={profileLink}
                onInputComment={alert}
                onReopenIssue={() => alert('reopen')}
                onCloseIssue={() => alert('closed')}
                onCommentSubmit={() => alert('submit!')}
              />
            </>
          </SidebarLayout.Content>
          <SidebarLayout.Sidebar>
            <Sidebar selected={seletedState} handlers={handlers} />
          </SidebarLayout.Sidebar>
        </SidebarLayout.BaseLayout>
      </>
    )
  );
};

export default IssueDetailPage;
