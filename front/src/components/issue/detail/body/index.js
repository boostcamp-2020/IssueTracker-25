import React from 'react';
import Comment from './Comment';
import SidebarLayout from '../../../commons/SidebarLayout';

const IssueDetailBody = ({ issue }) => {
  return (
    <SidebarLayout.BaseLayout>
      <SidebarLayout.Content>
        <>
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
        </>
      </SidebarLayout.Content>
      <SidebarLayout.Sidebar>sidebar</SidebarLayout.Sidebar>
    </SidebarLayout.BaseLayout>
  );
};

export default IssueDetailBody;
