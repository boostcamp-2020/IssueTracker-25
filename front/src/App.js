import React, { Fragment } from 'react';
import { createGlobalStyle } from 'styled-components';
import IssueListPage from './routes/IssueList/IssueListPage';
import Header from './components/Header';

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

const App = () => {
  return (
    <>
      <GlobalStyled />
      <Header />
      <IssueListPage />
    </>
  );
};
export default App;
