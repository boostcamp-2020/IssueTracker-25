import React from 'react';
import styled from 'styled-components';
import Comment from './Comment';

const IssueDetailBodyContainer = styled.div`
  display: flex;
  flex-direction: column;

  .issue-detail-content {
    width: 100%;
  }

  .issue-detail-aside {
    width: 100%;
  }

  @media (min-width: 768px) {
    flex-direction: row;

    .issue-detail-content {
      width: 75%;
    }

    .issue-detail-aside {
      width: 25%;
    }
  }
`;

const IssueDetailBody = ({ issue }) => {
  return (
    <IssueDetailBodyContainer>
      <div className="issue-detail-content">
        <Comment
          writer={issue.Author}
          createdAt={issue.createdAt}
          contents={issue.contents}
          isAuthor={issue.isAuthor}
        />
        {issue.Comments.map((comment) => {
          return (
            <Comment
              writer={comment.User}
              createdAt={comment.createdAt}
              contents={comment.contents}
              key={`issue-${issue.id}-comment-${comment.id}`}
            />
          );
        })}
      </div>
      <div className="issue-detail-aside" />
    </IssueDetailBodyContainer>
  );
};

export default IssueDetailBody;
