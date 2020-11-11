import React from 'react';
import { Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import Header from '../../components/commons/Header';
import UserIdentifier from '../../models/user';
import IssueList from '../../models/issue/list';
import IssueDetail from '../../models/issue/detail';

const MainContainer = styled.div`
  padding: 2rem;
`;

const MainPageTemplate = () => {
  return (
    <>
      <Header />
      <UserIdentifier />
      <Switch>
        <MainContainer>
          <Route exact path="/issues/:id" component={IssueDetail} />
          <Route exact path="/" component={IssueList} />
        </MainContainer>
      </Switch>
    </>
  );
};

export default MainPageTemplate;
