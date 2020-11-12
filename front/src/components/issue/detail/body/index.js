import React from 'react';
import Comment from './Comment';
import MarkdownEditor from '../../../../models/markdown-editor';

const IssueDetailBody = ({
  issue,
  showEditIssueDetail,
  onChange,
  editContentsClickHandler,
}) => {
  return (
    <>
      {showEditIssueDetail ? (
        <MarkdownEditor
          onChange={(value) => onChange(value)}
          initialContents={issue.contents}
        />
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
