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
  profileLink,
  isClosed,
  onInputComment,
  onCloseIssue,
  onReopenIssue,
  onCommentSubmit,
}) => {
  return (
    <IssueDetailFooterContainer>
      <CommentInput
        profileLink={profileLink}
        isClosed={isClosed}
        onInputComment={onInputComment}
        onCloseIssue={onCloseIssue}
        onReopenIssue={onReopenIssue}
        onSubmit={onCommentSubmit}
      />
    </IssueDetailFooterContainer>
  );
};

export default IssueDetailFooter;
