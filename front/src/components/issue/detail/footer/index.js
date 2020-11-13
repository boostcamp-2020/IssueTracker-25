import React from 'react';
import styled from 'styled-components';
import color from '../../../../libs/color';
import CommentInput from './CommentInput';

const IssueDetailFooterContainer = styled.div`
  margin-top: 3rem;
  padding-top: 3rem;
  border-top: 1px solid ${color.lightGray};
`;

const IssueDetailFooter = ({
  contents,
  updateContents,
  profileLink,
  isClosed,
  onCloseIssue,
  onReopenIssue,
  onCommentSubmit,
}) => {
  return (
    <IssueDetailFooterContainer>
      <CommentInput
        contents={contents}
        updateContents={updateContents}
        profileLink={profileLink}
        isClosed={isClosed}
        onCloseIssue={onCloseIssue}
        onReopenIssue={onReopenIssue}
        onSubmit={onCommentSubmit}
      />
    </IssueDetailFooterContainer>
  );
};

export default IssueDetailFooter;
