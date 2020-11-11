import React from 'react';
import { Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import Header from '../../components/commons/Header';
import UserIdentifier from '../../models/user';
import IssueList from '../../models/issue/list';
import IssueDetail from '../../models/issue/detail';
import IssueRegister from '../../models/issue/new';
import routeUrl from '../../libs/routeUrl';

const MainContainer = styled.div`
  padding: 2rem;
`;

const MainPageTemplate = () => {
  return (
    <>
      <Header />
      <UserIdentifier />
      <MainContainer>
        <Switch>
          <Route exact path={routeUrl.NEW_ISSUES} component={IssueRegister} />
          <Route
            exact
            path={`${routeUrl.ISSUES}/:id`}
            component={IssueDetail}
          />
          <Route exact path={routeUrl.MAIN} component={IssueList} />
        </Switch>
      </MainContainer>
    </>
  );
};

export default MainPageTemplate;
