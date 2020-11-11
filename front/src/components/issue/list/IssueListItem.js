import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import color from '../../../libs/color';
import utils from '../../../libs/utils';
import LabelItem from '../../commons/Label';
import { UserProfileList } from '../../commons/UserProfile';
import CustomCheckBoxButton from '../../commons/buttons/CustomCheckBoxButton';
import routeUrl from '../../../libs/routeUrl';

const { timeDiffFromNow } = utils;
const IssueListItemContainer = styled.li`
  display: flex;
  border-top: 1px solid ${color.lightGray};
  padding: 1rem;
  justify-content: space-between;
  .issue-item + .issue-item {
    margin-left: 1rem;
  }
  .issue-item__title {
    font-weight: bold;
  }
  .issue-item__info-msg {
    color: ${color.Gray};
  }
`;

const UserProfileContainer = styled.div`
  display: flex;
  width: 40%;
  justify-content: center;
  align-items: center;
`;

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
function IssueListItem({ issue, checkBoxClickHandler }) {
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
    <IssueListItemContainer id={id}>
      <div className="issue-item__left-container">
        <CustomCheckBoxButton
          type="button"
          checked={checked}
          onClick={checkBoxClickHandler}
          id={id}
        />
        <Link to={`${routeUrl.ISSUES}/${id}`}>
          <span className="issue-item issue-item__title">{title}</span>
        </Link>
        {labels && <LabelContainer labels={labels} />}
        <div>
          <span className="issue-item issue-item__info-msg">
            {issueInfoMsg}
          </span>
          {milestone && (
            <span
              className="issue-item issue-item__milestone-title"
              id={milestone.id}
            >
              {milestone.title}
            </span>
          )}
        </div>
      </div>
      <UserProfileContainer>
        <UserProfileList
          className="issue-item issue-item__assignee"
          users={assignees}
        />
      </UserProfileContainer>
    </IssueListItemContainer>
  );
}

export default IssueListItem;
