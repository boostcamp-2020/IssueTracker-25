import React from 'react';
import styled from 'styled-components';
import color from '../../libs/color';
import actionType from './action-type';
import ListHeader from '../../components/ListHeader';
import IssueListItem from './IssueListItem';
import CustomCheckBoxButton from '../../components/buttons/CustomCheckBoxButton';
import Dropdown from '../../components/dropdown/Dropdown';
import UserDropDownItem from '../../components/dropdown/UserDropdownItem';

const { CHECK_ALL_ISSUE_HANDLER, CHECK_ISSUE_HANDLER } = actionType;

const IssueList = styled.div`
  border: 1px solid ${color.lightGray};
  color: ${color.black};
`;

const Ul = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;
`;
// For demo
const userInfo = [
  {
    name: 'yejineee',
    profileLink: 'https://avatars2.githubusercontent.com/u/43772082?s=64&v=4',
  },
  {
    name: 'rolled-potatoes',
    profileLink: 'https://avatars2.githubusercontent.com/u/44409642?s=64&v=4',
  },
  {
    name: 'LeeSuKyeong',
    profileLink: 'https://avatars1.githubusercontent.com/u/46044132?s=460&v=4',
  },
  {
    name: 'changheedev',
    profileLink:
      'https://avatars1.githubusercontent.com/u/17294694?s=460&u=ff808a49e15ba27ba7c8e0a960aa44a78c9b672b&v=4',
  },
];

const IssueListHeaderContainer = styled.div``;
function IssueListHeader({ checkAllIssue, dispatch }) {
  const checkBoxClickHandler = () => {
    dispatch({ type: CHECK_ALL_ISSUE_HANDLER });
  };
  return (
    <IssueListHeaderContainer>
      <CustomCheckBoxButton
        type="button"
        checked={checkAllIssue}
        onClick={checkBoxClickHandler}
      />

      <Dropdown
        className="issue-list-header__dropdown"
        headerText="Filter by author"
        button={<div>Author</div>}
      >
        {userInfo.map((user) => {
          return <UserDropDownItem userInfo={user} />;
        })}
      </Dropdown>
      <Dropdown
        className="issue-list-header__dropdown"
        headerText="Filter by label"
        button={<div>Label</div>}
      />
      <Dropdown
        className="issue-list-header__dropdown"
        headerText="Filter by milestone"
        button={<div>Milestones</div>}
      />
      <Dropdown
        className="issue-list-header__dropdown"
        headerText="Filter by who's assigned"
        button={<div>Assignee</div>}
      />
    </IssueListHeaderContainer>
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
        <IssueListItem
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
