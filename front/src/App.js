import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { UserProvider } from './contexts/user';
import LoginPage from './routes/LoginPage';
import CallbackPage from './routes/CallbackPage';
import MainPageTemplate from './routes/MainPageTemplate';
import color from './libs/color';
import routeUrl from './libs/routeUrl';

const GlobalStyled = createGlobalStyle`
  @font-face {
    font-family: 'IBMPlexSansKR-Regular';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-07@1.0/IBMPlexSansKR-Regular.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }
  * {
    box-sizing: border-box;
  }
  body{
    margin: 0; 
    font-family:'IBMPlexSansKR-Regular';
    color: ${color.gray};
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

  @media (max-width: 767.98px) {
    .pc-only {
      display: none;
    }
  }

  @media (min-width: 768px) {
    .mobile-only {
      display: none;
    }
  }
`;

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyled />
      <UserProvider>
        <Switch>
          <Route exact path={routeUrl.LOGIN} component={LoginPage} />
          <Route
            exact
            path={routeUrl.OAUTH_CALLBACK}
            component={CallbackPage}
          />
          <Route path={routeUrl.MAIN} component={MainPageTemplate} />
        </Switch>
      </UserProvider>
    </BrowserRouter>
  );
};
export default App;
