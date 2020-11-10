import React from 'react';
import styled from 'styled-components';
import SidebarLayout from '../../commons/SidebarLayout';
import IssueRegisterContent from './Content';
import { UserProfile } from '../../commons/UserProfile';

const UserProfileContainer = styled.div`
  margin-right: 1.5rem;
`;
const IssueRegisterPageBody = ({
  onSave,
  updateTitle,
  updateContent,
  submitButtonDisabled,
  profileLink,
}) => {
  return (
    <SidebarLayout.BaseLayout>
      <UserProfileContainer>
        <UserProfile src={profileLink} />
      </UserProfileContainer>
      <SidebarLayout.Content>
        <IssueRegisterContent
          onSave={onSave}
          updateTitle={updateTitle}
          updateContent={updateContent}
          submitButtonDisabled={submitButtonDisabled}
        />
      </SidebarLayout.Content>
      <SidebarLayout.Sidebar>sidebar</SidebarLayout.Sidebar>
    </SidebarLayout.BaseLayout>
  );
};

export default IssueRegisterPageBody;
