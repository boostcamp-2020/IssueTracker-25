import React from 'react';
import styled from 'styled-components';
import DropdownItemContainer from './DropdownItemContainer';
import * as Icons from '../../icons';

const UserDropdownItemContainer = styled(DropdownItemContainer)`
  .dropdown-item-check {
    width: 1.5rem;
  }
  img {
    height: 1.5rem;
    border-radius: 50%;
  }
`;

const UserDropdownItem = ({ selected, userInfo, onClick }) => {
  const { id, name, profileLink } = userInfo;
  return (
    <UserDropdownItemContainer onClick={onClick} data-user-id={id}>
      <div className="dropdown-item dropdown-item-check">
        {selected && <Icons.CheckIcon />}
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
