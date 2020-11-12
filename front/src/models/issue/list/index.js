import React from 'react';
import queryString from 'query-string';
import { useHistory } from 'react-router-dom';
import { useAsync } from '../../../hooks/useAsync';
import useFilter from '../../../hooks/useFilter';
import * as IssueListComponents from '../../../components/issue/list';
import Pagination from '../../../components/commons/Pagination';
import issueApi from '../../../apis/issue';
import reducer from './reducer';
import actions from './actions';

const FIRST_PAGE = 1;
const TARGET_PAGE = '/?page';

const getPage = (location) => {
  const { page: currentPage } = queryString.parse(location.search);
  return currentPage || FIRST_PAGE;
};

const initialState = {
  page: 1,
  lastPage: 1,
  issues: [],
  checkAllIssue: false,
};
const IssueList = ({ location }) => {
  const history = useHistory();
  const { state: filterState, handlers: filterHandler } = useFilter();
  const getIssuesApi = () => issueApi.getIssues(getPage(location));
  const { state, fetchStatus, dispatch } = useAsync({
    api: getIssuesApi,
    reducer,
    deps: [location.search],
    initialState,
  });
  const { page, lastPage, issues, checkAllIssue } = state;
  const { error, loading } = fetchStatus;

  if (error) {
    return <div>{error}</div>;
  }
  if (loading) {
    return null;
  }

  if (issues.length === 0) {
    return <div>No results matched your search.</div>;
  }

  const checkBoxClickHandler = ({ target }) => {
    const { id } = target;
    dispatch(actions.checkIssueHandler(id));
  };

  const allCheckBoxClickHandler = () => {
    dispatch(actions.checkAllIssueHandler());
  };

  const paginationClickHandler = ({ target }) => {
    const { page: moveTo } = target.dataset;
    history.push(`${TARGET_PAGE}=${moveTo}`);
    dispatch(actions.issueListPaging(moveTo));
  };

  return (
    <>
      <IssueListComponents.IssueFilterContainer />
      <IssueListComponents.IssueListContainer
        issues={issues}
        checkAllIssue={checkAllIssue}
        checkBoxClickHandler={checkBoxClickHandler}
        allCheckBoxClickHandler={allCheckBoxClickHandler}
        filterState={filterState}
        filterHandler={filterHandler}
      />
      <Pagination
        page={page}
        lastPage={lastPage}
        clickHandler={paginationClickHandler}
      />
    </>
  );
};

export default IssueList;
