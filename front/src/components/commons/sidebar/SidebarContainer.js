import React from 'react';
import styled from 'styled-components';
import color from '../../../libs/color';
import Dropdown from '../dropdown/Dropdown';
import { GearIcon } from '../../icons';
import LabelDropdownItem from '../dropdown/LabelDropdownItem';
import MilestoneDropdownItem from '../dropdown/MilestoneDropdownItem';
import UserDropdownItem from '../dropdown/UserDropdownItem';
import SelectedAssignee from './SelectedAssignee';
import SelectedMilestone from './SelectedMilestone';
import SelectedLabel from './SelectedLabel';

const SidebarSubContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  width: 100%;
  padding: 0.5rem 0;
  & + & {
    border-top: 1px solid ${color.lightGray};
  }
`;
const ButtonContainer = styled.div`
  flex: 1;
  display: flex;
  .button__icon {
    margin-left: auto;
  }

  &:hover {
    color: ${color.blue};
    cursor: pointer;
    .button__icon > svg {
      fill: ${color.blue};
    }
  }
`;
const buttonWithGearIcon = (buttonName) => {
  return (
    <ButtonContainer>
      <div className="button__name">{buttonName}</div>
      <div className="button__icon">
        <GearIcon />
      </div>
    </ButtonContainer>
  );
};

const sidebarInfo = {
  assignee: {
    buttonName: 'Assignees',
    headerText: 'Assign up to 10 people to this issue',
    message: 'No one--assign yourself',
  },
  label: {
    buttonName: 'Labels',
    headerText: 'Apply labels to this issue',
    message: 'None yet',
  },
  milestone: {
    buttonName: 'Milestone',
    headerText: 'Set milestone',
    message: 'no milestone',
  },
};
const SidebarContainer = ({
  labels,
  milestones,
  assignees,
  selectedAssignees,
  selectedMilestone,
  selectedLabels,
  assigneeSelectHandler,
  milestoneSelectHandler,
  labelSelectHandler,
}) => {
  return (
    <div>
      <SidebarSubContainer>
        <Dropdown
          headerText={sidebarInfo.assignee.headerText}
          button={buttonWithGearIcon(sidebarInfo.assignee.buttonName)}
        >
          {assignees.map((assignee) => (
            <UserDropdownItem
              key={`sidebar-assignee-id-${assignee.id}`}
              userInfo={assignee}
              onClick={assigneeSelectHandler}
              selected={selectedAssignees.has(assignee.id)}
            />
          ))}
        </Dropdown>
        <SelectedAssignee
          selectedAssignees={selectedAssignees}
          assignees={assignees}
          assigneeSelectHandler={assigneeSelectHandler}
          message={sidebarInfo.assignee.message}
        />
      </SidebarSubContainer>
      <SidebarSubContainer>
        <Dropdown
          headerText={sidebarInfo.label.headerText}
          button={buttonWithGearIcon(sidebarInfo.label.buttonName)}
        >
          {labels.map((label) => (
            <LabelDropdownItem
              key={`sidebar-label-id-${label.id}`}
              label={label}
              onClick={labelSelectHandler}
              selected={selectedLabels.has(label.id)}
            />
          ))}
        </Dropdown>
        <SelectedLabel
          selectedLabels={selectedLabels}
          labels={labels}
          message={sidebarInfo.label.message}
        />
      </SidebarSubContainer>
      <SidebarSubContainer>
        <Dropdown
          headerText={sidebarInfo.milestone.headerText}
          button={buttonWithGearIcon(sidebarInfo.milestone.buttonName)}
        >
          {milestones.map((milestone) => (
            <MilestoneDropdownItem
              key={`sidebar-milestone-id-${milestone.id}`}
              milestone={milestone}
              onClick={milestoneSelectHandler}
              selected={milestone.id === selectedMilestone}
            />
          ))}
        </Dropdown>
        <SelectedMilestone
          message={sidebarInfo.milestone.message}
          selectedMilestone={selectedMilestone}
          milestones={milestones}
        />
      </SidebarSubContainer>
    </div>
  );
};

export default SidebarContainer;
