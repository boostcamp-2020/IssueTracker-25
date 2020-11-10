import React from 'react';
import styled from 'styled-components';
import color from '../../../libs/color';
import Dropdown from '../dropdown/Dropdown';
import { GearIcon } from '../../icons';
import LabelDropdownItem from '../dropdown/LabelDropdownItem';
import TextDropdownItem from '../dropdown/TextDropdownItem';
import UserDropdownItem from '../dropdown/UserDropdownItem';

const SidebarSubContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  width: 100%;
  padding: 0.5rem 0;
  border: 1px solid green;
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
const assignees = [
  {
    id: 1,

    name: 'yejineee',
    profileLink: 'https://avatars2.githubusercontent.com/u/43772082?s=64&v=4',
  },
  {
    id: 2,

    name: 'rolled-potatoes',
    profileLink: 'https://avatars2.githubusercontent.com/u/44409642?s=64&v=4',
  },
  {
    id: 3,

    name: 'LeeSuKyeong',
    profileLink: 'https://avatars1.githubusercontent.com/u/46044132?s=460&v=4',
  },
  {
    id: 4,

    name: 'changheedev',
    profileLink:
      'https://avatars1.githubusercontent.com/u/17294694?s=460&u=ff808a49e15ba27ba7c8e0a960aa44a78c9b672b&v=4',
  },
];
const labels = [
  {
    id: 1,
    name: 'bug',
    color: 'red',
    description: "something isn't working",
  },
  {
    id: 2,

    name: 'good first issue',
    color: 'blue',
    description: 'good for newcomers',
  },
  {
    id: 3,

    name: 'invalid',
    color: 'yellow',
    description: "This doesn't seem right",
  },
];
const milestones = [
  {
    id: 1,
    title: 'week1',
    description: 'week1 desc',
    endDate: '2020-12-31 09:00:00',
    createdAt: '2020-11-01 00:00:00',
  },
  {
    id: 2,
    title: 'week2',
    description: 'week2 desc',
    endDate: '2020-12-31 09:00:00',
    createdAt: '2020-11-01 00:00:00',
  },
  {
    id: 3,
    title: 'week3',
    description: 'week3 desc',
    endDate: '2020-12-31 09:00:00',
    createdAt: '2020-11-01 00:00:00',
  },
];
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
const SidebarContainer = () => {
  return (
    <div>
      <SidebarSubContainer>
        <Dropdown
          headerText={sidebarInfo.assignee.headerText}
          button={buttonWithGearIcon(sidebarInfo.assignee.buttonName)}
        >
          {assignees.map((user) => {
            return (
              <UserDropdownItem
                key={`sidebar-user-id-${user.id}`}
                data-user-id={user.id}
                userInfo={user}
              />
            );
          })}
        </Dropdown>
        <button type="button">{sidebarInfo.assignee.message}</button>
      </SidebarSubContainer>
      <SidebarSubContainer>
        <Dropdown
          headerText={sidebarInfo.label.headerText}
          button={buttonWithGearIcon(sidebarInfo.label.buttonName)}
        >
          {labels.map((label) => (
            <LabelDropdownItem
              key={`sidebar-label-id-${label.id}`}
              data-label-id={label.id}
              label={label}
            />
          ))}
        </Dropdown>
        <div>{sidebarInfo.label.message}</div>
      </SidebarSubContainer>
      <SidebarSubContainer>
        <Dropdown
          headerText={sidebarInfo.milestone.headerText}
          button={buttonWithGearIcon(sidebarInfo.milestone.buttonName)}
        >
          {milestones.map((milestone) => (
            <TextDropdownItem
              key={`sidebar-milestone-id-${milestone.id}`}
              data-milestone-id={milestone.id}
              content={milestone.title}
            />
          ))}
        </Dropdown>
        <div>{sidebarInfo.milestone.message}</div>
      </SidebarSubContainer>
    </div>
  );
};

export default SidebarContainer;
