import React from 'react';
import styled from 'styled-components';

const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const SidebarContainer = styled.div`
  width: 100%;

  @media (min-width: 768px) {
    width: 25%;
  }
`;

const ContentContainer = styled.div`
  width: 100%;

  @media (min-width: 768px) {
    width: 75%;
  }
`;

const BaseLayout = ({ children }) => (
  <LayoutContainer>{children}</LayoutContainer>
);

const Content = ({ children }) => (
  <ContentContainer>{children}</ContentContainer>
);

const Sidebar = ({ children }) => (
  <SidebarContainer>{children}</SidebarContainer>
);

export default { BaseLayout, Content, Sidebar };
