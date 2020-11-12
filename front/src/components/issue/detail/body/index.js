import React from 'react';
import Comment from './Comment';
import { IssueEditBody } from '../../edit';

const IssueDetailBody = ({
  issue,
  showEditIssueDetail,
  editContentsClickHandler,
  ...restProps
}) => {
  return (
    <>
      {showEditIssueDetail ? (
        <IssueEditBody initialContents={issue.contents} {...restProps} />
      ) : (
        <Comment
          writer={issue.Author}
          createdAt={issue.createdAt}
          contents={issue.contents}
          isAuthor={issue.isAuthor}
          editContentsClickHandler={editContentsClickHandler}
        />
      )}
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
    </>
  );
};

export default IssueDetailBody;
