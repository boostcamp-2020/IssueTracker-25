import React from 'react';
import styled from 'styled-components';
import DropdownItemContainer from './DropdownItemContainer';
import CheckIconCompoent from '../CheckIconComponent';

const UserDropdownItemContainer = styled(DropdownItemContainer)`
  .dropdown-item-check {
    width: 1.5rem;
  }
  img {
    height: 1.5rem;
    border-radius: 50%;
  }
`;

const UserDropdownItem = ({ userInfo }) => {
  const { name, profileLink } = userInfo;
  return (
    <UserDropdownItemContainer>
      <div className="dropdown-item dropdown-item-check">
        <CheckIconCompoent />
      </div>
      <div className="dropdown-item">
        <img src={profileLink} alt="profile" />
      </div>
      <div className="dropdown-item">
        <span>{name}</span>
      </div>
    </UserDropdownItemContainer>
  );
};

export default UserDropdownItem;
