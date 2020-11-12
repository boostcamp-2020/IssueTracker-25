import React from 'react';
import styled from 'styled-components';
import IssueStateIcon from './IssueStateIcon';

const IssueInfoText = styled.span`
  margin-left: 0.5rem;
`;

const IssueHeaderInfo = ({ issue, countOfComments }) => {
  const { isClosed } = issue;

  const generateIssueInfo = () => {
    return `${issue.Author.name} ${
      issue.isClosed ? 'closed' : 'opend'
    } this issue ${issue.isClosed ? issue.closedAt : issue.createdAt} ㆍ ${
      countOfComments || 0
    } comments`;
  };

  return (
    <>
      <IssueStateIcon isClosed={isClosed} />
      <IssueInfoText>{generateIssueInfo()}</IssueInfoText>
    </>
  );
};

export default IssueHeaderInfo;
