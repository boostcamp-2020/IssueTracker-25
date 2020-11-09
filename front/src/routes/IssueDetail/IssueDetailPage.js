import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import IssueDetailHeader from './header/IssueDetailHeader';
import IssueDetailBody from './body/IssueDetailBody';
import issueAPI from '../../apis/issue';
import utils from '../../libs/utils';

const IssueDetailPage = () => {
  const [issue, setIssue] = useState({});
  const { id } = useParams();

  const updateIssue = async () => {
    const issueResponse = await issueAPI.getIssue(id);
    const newIssueState = { ...issueResponse };
    const countOfComments = issueResponse.Comments.length;
    newIssueState.countOfComments = countOfComments;
    setIssue(newIssueState);
  };

  useEffect(() => {
    updateIssue();
  }, []);

  return (
    !utils.isEmpty(issue) && (
      <>
        <IssueDetailHeader issue={issue} />
        <IssueDetailBody issue={issue} />
      </>
    )
  );
};

export default IssueDetailPage;
