import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from '../../components/Header';
import UserStore from '../user-store';
import IssueListPage from '../IssueList/IssueListPage';

const MainPageTemplate = () => {
  return (
    <>
      <Header />
      <UserStore />
      <Switch>
        <Route path="/" component={IssueListPage} />
      </Switch>
    </>
  );
};

export default MainPageTemplate;
