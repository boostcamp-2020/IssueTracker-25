import React, { Fragment } from 'react';
import { createGlobalStyle } from 'styled-components';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import IssueListPage from './routes/IssueList/IssueListPage';
import Header from './components/Header';
import { BaseProvider } from './routes/base/user-context';
import LoginPage from './routes/Login/LoginPage';
import CallbackPage from './routes/oauth/callback';

const GlobalStyled = createGlobalStyle`
  @font-face {
    font-family: 'IBMPlexSansKR-Regular';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-07@1.0/IBMPlexSansKR-Regular.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }
  body{
    margin : 0 ; 

    font-family:'IBMPlexSansKR-Regular';
  }
`;

const Template = () => {
  return (
    <>
      <Link to="login">로그인</Link>
      <Header />
      <IssueListPage />
    </>
  );
};
const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyled />
      <BaseProvider>
        <Switch>
          <Route exact path="/" component={Template} />
          <Route exact path="/login" component={LoginPage} />
          <Route path="/oauth/callback" component={CallbackPage} />
        </Switch>
      </BaseProvider>
    </BrowserRouter>
  );
};
export default App;
