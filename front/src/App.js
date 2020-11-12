import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { UserProvider } from './contexts/user';
import LoginPage from './routes/LoginPage';
import CallbackPage from './routes/CallbackPage';
import MainPageTemplate from './routes/MainPageTemplate';
import GlobalStyled from './GlobalStyled';
import routeUrl from './libs/routeUrl';

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
