import React from 'react';
import styled from 'styled-components';
import color from '../../../libs/color';
import ListHeader from '../../commons/ListHeader';
import IssueListItem from './IssueListItem';
import CustomCheckBoxButton from '../../commons/buttons/CustomCheckBoxButton';
import Dropdown from '../../commons/dropdown/Dropdown';
import UserDropDownItem from '../../commons/dropdown/UserDropdownItem';

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
function IssueListHeader({ checkAllIssue, allCheckBoxClickHandler }) {
  return (
    <IssueListHeaderContainer>
      <CustomCheckBoxButton
        type="button"
        checked={checkAllIssue}
        onClick={allCheckBoxClickHandler}
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
}) {
  return (
    <>
      <IssueList>
        <ListHeader>
          <IssueListHeader
            checkAllIssue={checkAllIssue}
            allCheckBoxClickHandler={allCheckBoxClickHandler}
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
