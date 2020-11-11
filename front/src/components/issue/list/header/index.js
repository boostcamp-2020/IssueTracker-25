import React from 'react';
import styled from 'styled-components';
import CustomCheckBoxButton from '../../../commons/buttons/CustomCheckBoxButton';
import Dropdown from '../../../commons/dropdown/Dropdown';
import UserDropdownItem from '../../../commons/dropdown/UserDropdownItem';
import LabelDropdownItem from '../../../commons/dropdown/LabelDropdownItem';
import MilestoneDropdownItem from '../../../commons/dropdown/MilestoneDropdownItem';

const IssueListHeaderContainer = styled.div``;

const IssueListHeader = ({
  checkAllIssue,
  allCheckBoxClickHandler,
  labels,
  milestones,
  users,
  selectedAssigneeId,
  selectedAuthorId,
  selectedMilestoneId,
  selectedLabelSet,
  milestoneSelectHandler,
  labelSelectHandler,
  assigneeSelectHandler,
  authorSelectHandler,
}) => {
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
        {users &&
          users.map((user) => {
            return (
              <UserDropdownItem
                key={`filter-author-id-${user.id}`}
                userInfo={user}
                onClick={authorSelectHandler}
                selected={selectedAuthorId === user.id}
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
                onClick={labelSelectHandler}
                selected={selectedLabelSet.has(label.id)}
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
                onClick={milestoneSelectHandler}
                selected={selectedMilestoneId === milestone.id}
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
                onClick={assigneeSelectHandler}
                selected={selectedAssigneeId === user.id}
              />
            );
          })}
      </Dropdown>
    </IssueListHeaderContainer>
  );
};

export default IssueListHeader;
