import React from 'react';
import styled from 'styled-components';
import IssueStateIcon from './IssueStateIcon';

const IssueInfoText = styled.span`
  margin-left: 0.5rem;
`;

const IssueDetailHeaderInfo = ({ issue }) => {
  const { isClosed } = issue;

  const generateIssueInfo = () => {
    return `${issue.Author.name} ${
      issue.isClosed ? 'closed' : 'opend'
    } this issue ${issue.isClosed ? issue.closedAt : issue.createdAt} ㆍ ${
      issue.countOfComments || 0
    } comments`;
  };

  return (
    <>
      <IssueStateIcon isClosed={isClosed} />
      <IssueInfoText>{generateIssueInfo()}</IssueInfoText>
    </>
  );
};

export default IssueDetailHeaderInfo;
