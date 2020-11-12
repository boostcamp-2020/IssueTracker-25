import React from 'react';
import { useParams } from 'react-router-dom';
import {
  IssueDetailHeader,
  IssueDetailBody,
} from '../../../components/issue/detail';
import IssueEditHeader from '../../../components/issue/edit/header';
import issueAPI from '../../../apis/issue';
import utils from '../../../libs/utils';
import { useAsync } from '../../../hooks/useAsync';
import useSidebar from '../../../hooks/useSidebar';
import reducer from './reducer';
import actions from './actions';

const initialState = {
  issue: {},
  newTitle: '',
  countOfComments: undefined,
  showEditIssueHeader: false,
};

const IssueDetailPage = () => {
  const { id } = useParams();
  const getIssueApi = () => issueAPI.getIssue(id);
  const { state: seletedState, handlers } = useSidebar();
  const { state: detailState, fetchStatus, dispatch } = useAsync({
    api: getIssueApi,
    reducer,
    initialState,
  });
  const { issue, showEditIssueHeader } = detailState;
  const { error, loading } = fetchStatus;

  const editTitleClickHandler = () => {
    dispatch(actions.showEditIssueHeader(true));
  };
  const cancelTitleClickHandler = () => {
    dispatch(actions.showEditIssueHeader(false));
  };

  const onTitleSave = async () => {
    const {
      issue: { id: issueId },
      newTitle,
    } = detailState;
    if (!newTitle.length) return false;
    try {
      await issueAPI.updateTitle({ id: issueId, title: newTitle });
      dispatch(actions.successUpdateTitle());
      return true;
    } catch (updateError) {
      return <div>{updateError}</div>;
    }
  };

  const updateTitle = (newTitle) => {
    dispatch(actions.updateTitle(newTitle));
  };

  if (error) {
    return <div>{error}</div>;
  }
  if (loading) {
    return null;
  }

  return (
    !utils.isEmpty(issue) && (
      <>
        {showEditIssueHeader ? (
          <IssueEditHeader
            issue={issue}
            updateTitle={updateTitle}
            onTitleSave={onTitleSave}
            cancelTitleClickHandler={cancelTitleClickHandler}
          />
        ) : (
          <IssueDetailHeader
            issue={issue}
            editTitleClickHandler={editTitleClickHandler}
          />
        )}
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
