import React from 'react';
import styled from 'styled-components';
import color from '../../libs/color';
import actionType from './action-type';
import ListHeader from '../../components/ListHeader';
import { UserProfileList } from '../../components/UserProfile';

const { CHECK_ALL_ISSUE_HANDLER, CHECK_ISSUE_HANDLER } = actionType;
const CustomCheckBoxButton = styled.button`
  width: 1rem;
  height: 1rem;
  background-color: ${({ checked }) => (checked ? color.blue : color.white)};
`;
const IssueList = styled.div`
  border: 1px solid ${color.lightGray};
  color: ${color.black};
`;
const IssueItemContainer = styled.li`
  border-top: 1px solid ${color.lightGray};
  padding: 1rem;
`;

const Ul = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;
`;

function IssueListHeader({ checkAllIssue, dispatch }) {
  const checkBoxClickHandler = () => {
    dispatch({ type: CHECK_ALL_ISSUE_HANDLER });
  };
  return (
    <>
      <CustomCheckBoxButton
        type="button"
        checked={checkAllIssue}
        onClick={checkBoxClickHandler}
      />
    </>
  );
}

function IssueItem({ issue, checkBoxClickHandler }) {
  const {
    id,
    title,
    writer,
    milestoneTitle,
    checked,
    isClosed,
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
        <span className="issue-item__issue-number">#{id}</span>
        <span className="issue-item__date">
          {isClosed ? 'closed' : 'opened'}
        </span>
        <span className="issue-item__writer">{writer}</span>
        {milestoneTitle !== '' && (
          <span className="issue-item__milestone-title">{milestoneTitle}</span>
        )}
        <UserProfileList
          className="issue-item__assignee"
          users={assigneeList}
        />
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

function IssueListContainer({ issues, checkAllIssue, dispatch }) {
  return (
    <>
      <IssueList>
        <ListHeader>
          <IssueListHeader checkAllIssue={checkAllIssue} dispatch={dispatch} />
        </ListHeader>
        <IssueListBody issues={issues} dispatch={dispatch} />
      </IssueList>
    </>
  );
}

export default IssueListContainer;
