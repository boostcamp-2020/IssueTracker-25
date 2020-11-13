import React from 'react';
import CustomCheckBoxButton from '../../../commons/buttons/CustomCheckBoxButton';
import Dropdown from '../../../commons/dropdown/Dropdown';
import UserDropdownItem from '../../../commons/dropdown/UserDropdownItem';
import LabelDropdownItem from '../../../commons/dropdown/LabelDropdownItem';
import MilestoneDropdownItem from '../../../commons/dropdown/MilestoneDropdownItem';
import NopDropdownItem from '../../../commons/dropdown/NopDropdownItem';

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
  console.log(filterState);
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
        <NopDropdownItem
          value="label"
          onClick={filterHandler}
          title="Unabled"
          key="filter-label-id-0"
        />
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
        <NopDropdownItem
          value="milestone"
          onClick={filterHandler}
          title="Issues with no milestones"
          key="filter-milestone-id-0"
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
        <NopDropdownItem
          value="assignee"
          onClick={filterHandler}
          title="Assgined to nobody"
          key="filter-assignee-id-0"
        />
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
