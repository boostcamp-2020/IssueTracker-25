import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { UserProvider } from './contexts/user';
import LoginPage from './routes/LoginPage';
import CallbackPage from './routes/CallbackPage';
import MainPageTemplate from './routes/MainPageTemplate';

const GlobalStyled = createGlobalStyle`
  @font-face {
    font-family: 'IBMPlexSansKR-Regular';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-07@1.0/IBMPlexSansKR-Regular.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }
  body{
    margin: 0; 
    font-family:'IBMPlexSansKR-Regular';
  }
  a {
    &:link {
      color: black;
      text-decoration: none;
    }
    &:visited {
      color: black;
      text-decoration: none;
    }
    &:hover {
      color: black;
      text-decoration: none;
    }
  }
`;

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyled />
      <UserProvider>
        <Switch>
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/oauth/callback" component={CallbackPage} />
          <Route path="/" component={MainPageTemplate} />
        </Switch>
      </UserProvider>
    </BrowserRouter>
  );
};
export default App;
