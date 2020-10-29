import React, { useReducer, useEffect } from 'react';
import issueApi from '../../apis/issue';
import IssueListContainer from './IssueListContainer';
import reducer from './issueHook';
import actionType from './issueAction';

const { FETCH_SUCCESS, FETCH_ERROR } = actionType;

function IssueListPage() {
  const [state, dispatch] = useReducer(reducer, {
    issues: undefined,
    allIssue: false,
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

  const { issues, allIssue, error, loading } = state;
  if (error) {
    return <div>{error}</div>;
  }
  if (loading) {
    return null;
  }
  if (state.issues && state.issues.length === 0) {
    return <div>No results matched your search.</div>;
  }
  return (
    <>
      <IssueListContainer
        issues={issues}
        allIssue={allIssue}
        dispatch={dispatch}
      />
    </>
  );
}
export default IssueListPage;
