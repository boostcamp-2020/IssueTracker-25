import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
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

const WaringContainer = styled.div`
  min-height: 15rem;
  display: flex;
  justify-content: center;
  align-items: center;
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
        {issues.length === 0 && (
          <WaringContainer>
            <div>No results matched your search.</div>
            <div>
              You could search <Link to="/?page=1&is=open">ISSUES</Link> .
            </div>
          </WaringContainer>
        )}
        {issues.length !== 0 && (
          <IssueListBody
            issues={issues}
            checkBoxClickHandler={checkBoxClickHandler}
          />
        )}
      </IssueList>
    </>
  );
}

export default IssueListContainer;
