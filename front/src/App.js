import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import { BaseProvider } from './routes/user-store/user-context';
import IssueListPage from './routes/IssueList/IssueListPage';
import Header from './components/Header';
import LoginPage from './routes/Login/LoginPage';
import CallbackPage from './routes/oauth/callback';
import UserStore from './routes/user-store';

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

const TempComponent = () => <div>temp</div>;
const Template = () => {
  return (
    <>
      <Header />
      <Link to="login">로그인</Link>
      <Switch>
        <Route path="/mil" component={TempComponent} />
        <Route path="/" component={IssueListPage} />
      </Switch>
      <UserStore />
    </>
  );
};
const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyled />
      <BaseProvider>
        <Switch>
          <Route path="/login" component={LoginPage} />
          <Route path="/oauth/callback" component={CallbackPage} />
          <Route path="/" component={Template} />
        </Switch>
      </BaseProvider>
    </BrowserRouter>
  );
};
export default App;
