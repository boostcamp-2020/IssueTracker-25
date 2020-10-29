import React from 'react';
import styled from 'styled-components';
import color from '../../components/color';
import ListHeader from '../../components/ListHeader';
import actionType from './issueAction';
import utils from '../../libs/utils';

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

function IssueListHeader({ allIssue, issues, dispatch }) {
  const checkBoxClickHandler = () => {
    dispatch({ type: CHECK_ALL_ISSUE_HANDLER });
  };
  const openedIssueCount = utils.countFilteredElement(
    issues,
    (issue) => issue.isClosed,
  );
  const closedIssueCount = utils.countFilteredElement(
    issues,
    (issue) => !issue.isClosed,
  );
  return (
    <>
      <CustomCheckBoxButton
        type="button"
        checked={allIssue}
        onClick={checkBoxClickHandler}
      />
      <span className="issue-list-header__opend-issue-count">
        {openedIssueCount}
        Open,
      </span>
      <span className="issue-list-header__closed-issue-count">
        {closedIssueCount}
        Closed
      </span>
    </>
  );
}

function IssueItem({ issue, checkBoxClickHandler }) {
  const {
    id,
    title,
    writer,
    milestoneTitle,
    createdAt,
    checked,
    assigneeList,
  } = issue;
  return (
    <IssueItemContainer id={id}>
      <div>
        <CustomCheckBoxButton
          type="button"
          checked={checked}
          onClick={checkBoxClickHandler}
          id={id}
        />
        <span className="issue-item__title">{title}</span>
        <span className="issue-item__label">라벨</span>
      </div>
      <div>
        <span className="issue-item__issue-number">#</span>
        <span className="issue-item__open-date">
          opened
          {createdAt}
        </span>
        <span className="issue-item__writer">{writer}</span>
        {milestoneTitle !== '' && (
          <span className="issue-item__milestone-title">{milestoneTitle}</span>
        )}
        {assigneeList.map((assignee) => (
          <span
            className="issue-item__assignee"
            key={assignee.id}
            id={assignee.id}
          >
            {assignee.name}
          </span>
        ))}
      </div>
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
      {issues.map(
        (issue) =>
          !issue.isClosed && (
            <IssueItem
              key={issue.id}
              issue={issue}
              checkBoxClickHandler={checkBoxClickHandler}
            />
          ),
      )}
    </Ul>
  );
}

function IssueListContainer({ issues, allIssue, dispatch }) {
  return (
    <>
      <IssueList>
        <ListHeader>
          <IssueListHeader
            allIssue={allIssue}
            issues={issues}
            dispatch={dispatch}
          />
        </ListHeader>
        <IssueListBody issues={issues} dispatch={dispatch} />
      </IssueList>
    </>
  );
}

export default IssueListContainer;
