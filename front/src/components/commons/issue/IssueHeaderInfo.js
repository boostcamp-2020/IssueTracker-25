import React from 'react';
import styled from 'styled-components';
import IssueStateIcon from './IssueStateIcon';
import utils from '../../../libs/utils';

const IssueInfoText = styled.span`
  margin-left: 0.5rem;
`;

const IssueHeaderInfo = ({ issue, countOfComments }) => {
  const { isClosed, closedAt, createdAt } = issue;

  const generateIssueInfo = () => {
    const status = isClosed ? 'closed' : 'opened';
    const datetime = isClosed ? closedAt : createdAt;

    return `${issue.Author.name} ${status} this issue ${utils.timeDiffFromNow(
      datetime,
    )} ㆍ ${countOfComments || 0} comments`;
  };

  return (
    <>
      <IssueStateIcon isClosed={isClosed} />
      <IssueInfoText>{generateIssueInfo()}</IssueInfoText>
    </>
  );
};

export default IssueHeaderInfo;
