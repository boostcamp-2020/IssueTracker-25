import React from 'react';
import styled from 'styled-components';
import SidebarLayout from '../../commons/SidebarLayout';
import IssueRegisterContent from './Content';
import { UserProfile } from '../../commons/UserProfile';
import Sidebar from '../../../models/sidebar';

const UserProfileContainer = styled.div`
  margin-right: 1.5rem;
`;
const IssueRegisterPageBody = ({
  onSave,
  updateTitle,
  updateContents,
  contents,
  submitButtonDisabled,
  profileLink,
  sidebarHandlers,
  sidebarSelectedState,
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
          contents={contents}
          updateContents={updateContents}
          submitButtonDisabled={submitButtonDisabled}
        />
      </SidebarLayout.Content>
      <SidebarLayout.Sidebar>
        <Sidebar handlers={sidebarHandlers} selected={sidebarSelectedState} />
      </SidebarLayout.Sidebar>
    </SidebarLayout.BaseLayout>
  );
};

export default IssueRegisterPageBody;
