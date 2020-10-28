import React from 'react';
import styled from 'styled-components';
import color from '../../components/color';
import ListHeader from '../../components/ListHeader';
import actionType from './issueAction';

const { CHECK_ALL_ISSUE_HANDLER, CHECK_ISSUE_HANDLER } = actionType;
const CustomCheckBoxButton = styled.button`
  width: 1rem;
  height: 1rem;

  background-color: ${({ checked }) => (checked ? color.blue : 'white')};
`;
const IssueList = styled.div`
  border: 1px solid ${color.boldBlue};
`;
const IssueItemContainer = styled.li`
  border-top: 1px solid ${color.boldBlue};
  padding: 1rem;
`;

const Ul = styled.ul`
  margin: 0;
  padding: 0;

  list-style-type: none;
`;
function IssueListHeader({ allIssue, dispatch }) {
  const checkBoxClickHandler = () => {
    dispatch({ type: CHECK_ALL_ISSUE_HANDLER });
  };
  return (
    <>
      <CustomCheckBoxButton
        type="button"
        checked={allIssue}
        onClick={checkBoxClickHandler}
      />
    </>
  );
}

function IssueItem({ issue, checkBoxClickHandler }) {
  const { id, title, checked } = issue;
  return (
    <IssueItemContainer>
      <CustomCheckBoxButton
        type="button"
        checked={checked}
        onClick={checkBoxClickHandler}
        id={id}
      />
      <div className="issue__title">{title}</div>
    </IssueItemContainer>
  );
}

function IssueListBody({ issues, dispatch }) {
  const checkBoxClickHandler = ({ target }) => {
    const { id } = target;
    dispatch({ type: CHECK_ISSUE_HANDLER, id });
  };

  return (
    <Ul>
      {issues.map((issue) => (
        <IssueItem
          key={issue.id}
          issue={issue}
          checkBoxClickHandler={checkBoxClickHandler}
        />
      ))}
    </Ul>
  );
}

function IssueListContainer({ issues, allIssue, dispatch }) {
  return (
    <>
      <IssueList>
        <ListHeader>
          <IssueListHeader allIssue={allIssue} dispatch={dispatch} />
        </ListHeader>
        <IssueListBody issues={issues} dispatch={dispatch} />
      </IssueList>
    </>
  );
}

export default IssueListContainer;
