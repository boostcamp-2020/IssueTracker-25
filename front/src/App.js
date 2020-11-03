import React, { Fragment } from 'react';
import { createGlobalStyle } from 'styled-components';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import IssueListPage from './routes/IssueList/IssueListPage';
import Header from './components/Header';
import { BaseProvider } from './routes/base/user-context';

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
        </Switch>
      </BaseProvider>
    </BrowserRouter>
  );
};
export default App;
