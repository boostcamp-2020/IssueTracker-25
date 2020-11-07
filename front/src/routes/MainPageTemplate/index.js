import React from 'react';
import { Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import Header from '../../components/Header';
import UserStore from '../user-store';
import IssueListPage from '../IssueList/IssueListPage';
import IssueDetailPage from '../IssueDetail/IssueDetailPage';

const MainContainer = styled.div`
  margin: 100px 200px;
`;

const MainPageTemplate = () => {
  return (
    <>
      <Header />
      <UserStore />
      <Switch>
        <MainContainer>
          <Route exact path="/issues/:id" component={IssueDetailPage} />
          <Route exact path="/" component={IssueListPage} />
        </MainContainer>
      </Switch>
    </>
  );
};

export default MainPageTemplate;
