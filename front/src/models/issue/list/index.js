import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import queryString from 'query-string';
import { useAsync } from '../../../hooks/useAsync';
import * as IssueListComponents from '../../../components/issue/list';
import Pagination from '../../../components/commons/Pagination';
import issueApi from '../../../apis/issue';
import reducer from './reducer';
import actions from './actions';

import {
  decodeFilter,
  encodeFilter,
  parser,
  getFilter,
  getPage,
} from '../../../libs/url-parser';

const ENTER = 13;
const TARGET_PAGE = '/?page';
const initialState = {
  lastPage: 1,
  issues: [],
  checkAllIssue: false,
};

const IssueList = ({ location }) => {
  const history = useHistory();
  const filterQuery = decodeURIComponent(getFilter(location));
  const [search, setSearch] = useState(encodeFilter(filterQuery));
  const getIssuesApi = () => issueApi.getIssues(getPage(location), filterQuery);
  const { state, fetchStatus, dispatch } = useAsync({
    api: getIssuesApi,
    reducer,
    deps: [location.search],
    initialState,
  });
  const { lastPage, issues, checkAllIssue } = state;
  const { error } = fetchStatus;
  const parsered = parser(location.search);

  useEffect(() => {
    const encodedFilter = encodeFilter(filterQuery);
    setSearch(encodedFilter);
  }, [location.search]);

  const onFilterHandler = ({ key, value }) => {
    if (key === 'label') {
      if (!parsered[key]) {
        parsered[key] = new Set([value]);
      } else if (parsered[key].has(value)) {
        parsered[key].delete(value);
      } else {
        parsered[key].add(value);
      }
    } else if (!parsered[key]) {
      parsered[key] = value;
    } else {
      parsered[key] = parsered[key] === value ? undefined : value;
    }
    const query = queryString.stringify({
      ...parsered,
      label: parsered.label ? [...parsered.label] : undefined,
    });
    history.push(`${TARGET_PAGE}=1${query ? `&${query}` : ''}`);
  };

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
  };
  const searchHandler = ({ target: { value } }) => {
    setSearch(value);
  };

  const pressSearchEnter = ({ keyCode }) => {
    const query = decodeFilter(search);
    if (keyCode === ENTER) {
      history.push(`${TARGET_PAGE}=1${query ? `&${query}` : ''}`);
    }
  };
  const onClickFilterItem = (value) => {
    const query = decodeFilter(value);
    history.push(`${TARGET_PAGE}=1${query ? `&${query}` : ''}`);
  };

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <>
      <IssueListComponents.IssueFilterContainer
        filter={search}
        onEnter={pressSearchEnter}
        onChange={searchHandler}
        clickFilterHandler={onClickFilterItem}
      />
      <IssueListComponents.IssueListContainer
        issues={issues}
        checkAllIssue={checkAllIssue}
        checkBoxClickHandler={checkBoxClickHandler}
        allCheckBoxClickHandler={allCheckBoxClickHandler}
        filterState={parsered}
        filterHandler={onFilterHandler}
      />
      <Pagination
        page={getPage(location)}
        lastPage={lastPage}
        search={decodeFilter(search)}
        clickHandler={paginationClickHandler}
      />
    </>
  );
};

export default IssueList;
