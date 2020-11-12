import React from 'react';
import Comment from './Comment';

const IssueDetailBody = ({ issue, editContentsClickHandler, ...restProps }) => {
  return (
    <>
      <Comment
        writer={issue.Author}
        createdAt={issue.createdAt}
        contents={issue.contents}
        isAuthor={issue.isAuthor}
        editContentsClickHandler={editContentsClickHandler}
        {...restProps}
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
    </>
  );
};

export default IssueDetailBody;
