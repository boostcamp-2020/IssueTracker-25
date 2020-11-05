import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from '../../components/Header';
import UserStore from '../user-store';
import IssueListPage from '../IssueList/IssueListPage';
import IssueDetailPage from '../IssueDetail/IssueDetailPage';

const MainPageTemplate = () => {
  return (
    <>
      <Header />
      <UserStore />
      <Switch>
        <main>
          <Route exact path="/issues/:id" component={IssueDetailPage} />
          <Route exact path="/" component={IssueListPage} />
        </main>
      </Switch>
    </>
  );
};

export default MainPageTemplate;
