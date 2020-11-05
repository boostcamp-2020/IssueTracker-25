import React from 'react';
import styled from 'styled-components';
import color from '../../libs/color';
import actionType from './action-type';
import utils from '../../libs/utils';
import ListHeader from '../../components/ListHeader';
import { UserProfileList } from '../../components/UserProfile';
import LabelItem from '../../components/Label';

const { timeDiffFromNow } = utils;
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
  display: flex;
  border-top: 1px solid ${color.lightGray};
  padding: 1rem;
  justify-content: space-between;

  & .issue-item__title {
    font-weight: bold;
  }
  & .issue-item__info-msg {
    color: ${color.Gray};
  }
`;

const Ul = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;
`;

const UserProfileContainer = styled.div`
  display: flex;
  width: 40%;
  justify-content: center;
  align-items: center;
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

function LabelContainer({ labels }) {
  return (
    <>
      {labels.map((label) => (
        <LabelItem key={label.id} id={label.id} label={label}>
          {label.name}
        </LabelItem>
      ))}
    </>
  );
}

function IssueItem({ issue, checkBoxClickHandler }) {
  const {
    id,
    title,
    checked,
    isClosed,
    createdAt,
    closedAt,
    Author: author,
    Milestone: milestone,
    Assignees: assignees,
    Labels: labels,
  } = issue;

  const openedInfoMsg = `#${id} opened ${timeDiffFromNow(createdAt)} by ${
    author.name
  }`;
  const closedInfoMsg = `#${id} by ${author.name} was closed ${timeDiffFromNow(
    closedAt,
  )}`;
  const issueInfoMsg = isClosed ? closedInfoMsg : openedInfoMsg;
  return (
    <IssueItemContainer id={id}>
      <div className="issue-item__left-container">
        <CustomCheckBoxButton
          type="button"
          checked={checked}
          onClick={checkBoxClickHandler}
          id={id}
        />
        <span className="issue-item__title">{title}</span>
        {labels && <LabelContainer labels={labels} />}
        <div>
          <span className="issue-item__info-msg">{issueInfoMsg}</span>
          {milestone && (
            <span className="issue-item__milestone-title" id={milestone.id}>
              {milestone.title}
            </span>
          )}
        </div>
      </div>
      <UserProfileContainer>
        <UserProfileList className="issue-item__assignee" users={assignees} />
      </UserProfileContainer>
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
