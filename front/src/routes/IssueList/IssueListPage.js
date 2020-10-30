import React, { useReducer, useEffect } from 'react';
import styled from 'styled-components';

import issueApi from '../../apis/issue';
import reducer from './reducer';
import actionType from './action-type';
import IssueListContainer from './IssueListContainer';
import IssueFilterContainer from './IssueFilterContainer';

const { FETCH_SUCCESS, FETCH_ERROR } = actionType;

const Div = styled.div`
  padding: 2rem 5rem;
`;
function IssueListPage() {
  const [state, dispatch] = useReducer(reducer, {
    issues: undefined,
    filteredIssues: undefined,
    checkAllIssue: false,
    error: undefined,
    loading: true,
  });

  const fetchIssue = async () => {
    try {
      const issues = await issueApi.getIssues();
      dispatch({ type: FETCH_SUCCESS, issueItems: issues });
    } catch (e) {
      dispatch({ type: FETCH_ERROR, error: e.message });
    }
  };

  useEffect(() => {
    fetchIssue();
  }, []);

  const { filteredIssues, checkAllIssue, error, loading } = state;
  if (error) {
    return <div>{error}</div>;
  }
  if (loading) {
    return null;
  }
  if (filteredIssues.length === 0) {
    return <div>No results matched your search.</div>;
  }
  return (
    <Div>
      <IssueFilterContainer />
      <IssueListContainer
        issues={filteredIssues}
        checkAllIssue={checkAllIssue}
        dispatch={dispatch}
      />
    </Div>
  );
}
export default IssueListPage;
