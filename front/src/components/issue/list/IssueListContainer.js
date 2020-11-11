import React from 'react';
import styled from 'styled-components';
import color from '../../../libs/color';
import ListHeader from '../../commons/ListHeader';
import IssueListItem from './IssueListItem';
import IssueListHeader from '../../../models/issue/list/header';

const IssueList = styled.div`
  border: 1px solid ${color.lightGray};
  color: ${color.black};
`;

const Ul = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;
`;

function IssueListBody({ issues, checkBoxClickHandler }) {
  return (
    <Ul>
      {issues.map((issue) => (
        <IssueListItem
          key={issue.id}
          issue={issue}
          checkBoxClickHandler={checkBoxClickHandler}
        />
      ))}
    </Ul>
  );
}

function IssueListContainer({
  issues,
  checkAllIssue,
  checkBoxClickHandler,
  allCheckBoxClickHandler,
  filterState,
  filterHandler,
}) {
  return (
    <>
      <IssueList>
        <ListHeader>
          <IssueListHeader
            checkAllIssue={checkAllIssue}
            allCheckBoxClickHandler={allCheckBoxClickHandler}
            filterHandler={filterHandler}
            filterState={filterState}
          />
        </ListHeader>
        <IssueListBody
          issues={issues}
          checkBoxClickHandler={checkBoxClickHandler}
        />
      </IssueList>
    </>
  );
}

export default IssueListContainer;
