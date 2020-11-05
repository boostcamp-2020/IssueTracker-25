import React, { useReducer, useEffect } from 'react';
import queryString from 'query-string';
import { useHistory } from 'react-router-dom';

import issueApi from '../../apis/issue';
import reducer from './reducer';
import actionType from './action-type';
import IssueListContainer from './IssueListContainer';
import IssueFilterContainer from './IssueFilterContainer';
import Pagination from '../../components/Pagination';

const { FETCH_SUCCESS, FETCH_ERROR, ISSUE_LIST_PAGING } = actionType;

function IssueListPage({ location }) {
  const [state, dispatch] = useReducer(reducer, {
    issues: undefined,
    page: undefined,
    lastPage: undefined,
    checkAllIssue: false,
    error: undefined,
    loading: true,
  });
  const history = useHistory();

  const fetchIssue = async () => {
    const FIRST_PAGE = 1;
    const { page: currentPage } = queryString.parse(location.search);
    try {
      const {
        pagination: { page, lastPage },
        issues,
      } = await issueApi.getIssues(currentPage || FIRST_PAGE);
      dispatch({ type: FETCH_SUCCESS, issues, page, lastPage });
    } catch (e) {
      dispatch({ type: FETCH_ERROR, error: e.message });
    }
  };

  useEffect(() => {
    fetchIssue();
  }, [state.page]);

  const { page, lastPage, issues, checkAllIssue, error, loading } = state;

  if (error) {
    return <div>{error}</div>;
  }
  if (loading) {
    return null;
  }
  if (issues.length === 0) {
    return <div>No results matched your search.</div>;
  }

  const paginantionClickHandler = ({ target }) => {
    const { page: moveTo } = target.dataset;
    history.push(`/?page=${moveTo}`);
    dispatch({ type: ISSUE_LIST_PAGING, moveTo });
  };

  return (
    <>
      <IssueFilterContainer />
      <IssueListContainer
        issues={issues}
        checkAllIssue={checkAllIssue}
        dispatch={dispatch}
      />
      <Pagination
        page={page}
        lastPage={lastPage}
        clickHandler={paginantionClickHandler}
      />
    </>
  );
}

export default IssueListPage;
