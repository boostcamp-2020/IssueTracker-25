import React from 'react';
import CustomCheckBoxButton from '../../../commons/buttons/CustomCheckBoxButton';
import Dropdown from '../../../commons/dropdown/Dropdown';
import UserDropdownItem from '../../../commons/dropdown/UserDropdownItem';
import LabelDropdownItem from '../../../commons/dropdown/LabelDropdownItem';
import MilestoneDropdownItem from '../../../commons/dropdown/MilestoneDropdownItem';

const IssueListHeader = ({
  checkAllIssue,
  allCheckBoxClickHandler,
  labels,
  milestones,
  users,
  filterState,
  filterHandler,
}) => {
  const {
    milestone: selectedMilestone = '',
    author: selectedAuthor = '',
    assginee: selectedAssignee = '',
    label: selectedLabelSet = new Set(),
  } = filterState;
  return (
    <div>
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
        {users &&
          users.map((user) => {
            return (
              <UserDropdownItem
                key={`filter-author-id-${user.id}`}
                userInfo={user}
                isAuthor
                onClick={filterHandler}
                selected={selectedAuthor === user.name}
              />
            );
          })}
      </Dropdown>
      <Dropdown
        className="issue-list-header__dropdown"
        headerText="Filter by label"
        button={<div>Label</div>}
      >
        <LabelDropdownItem label={{ id: 0, name: 'Unabled' }} />
        {labels &&
          labels.map((label) => {
            return (
              <LabelDropdownItem
                key={`filter-label-id-${label.id}`}
                label={label}
                onClick={filterHandler}
                selected={selectedLabelSet.has(label.name)}
              />
            );
          })}
      </Dropdown>
      <Dropdown
        className="issue-list-header__dropdown"
        headerText="Filter by milestone"
        button={<div>Milestones</div>}
      >
        <MilestoneDropdownItem
          key="filter-milestone-id-0"
          milestone={{ id: 0, title: 'Issues with no milestones' }}
        />
        {milestones &&
          milestones.map((milestone) => {
            return (
              <MilestoneDropdownItem
                key={`filter-milestone-id-${milestone.id}`}
                milestone={milestone}
                onClick={filterHandler}
                selected={selectedMilestone === milestone.title}
              />
            );
          })}
      </Dropdown>
      <Dropdown
        className="issue-list-header__dropdown"
        headerText="Filter by who's assigned"
        button={<div>Assignee</div>}
      >
        <UserDropdownItem userInfo={{ id: 0, name: 'Assgined to nobody' }} />
        {users &&
          users.map((user) => {
            return (
              <UserDropdownItem
                key={`filter-assignee-id-${user.id}`}
                userInfo={user}
                onClick={filterHandler}
                selected={selectedAssignee === user.name}
              />
            );
          })}
      </Dropdown>
    </div>
  );
};

export default IssueListHeader;
