import React from 'react';
import styled from 'styled-components';
import DropdownItemContainer from './DropdownItemContainer';

const UserDropdownItemContainer = styled(DropdownItemContainer)`
  .dropdown-item-check {
    width: 1.5rem;
  }
  img {
    height: 1.5rem;
    border-radius: 50%;
  }
  span {
    text-indent: 0.4rem;
  }
`;

export const Check = () => {
  return (
    <svg
      className="octicon octicon-check SelectMenu-icon SelectMenu-icon--check"
      viewBox="0 0 16 16"
      version="1.1"
      width="16"
      height="16"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"
      >
        <path
          fillRule="evenodd"
          d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"
        />
      </path>
    </svg>
  );
};
const UserDropdownItem = ({ data }) => {
  const { isCheck, name, img } = data;
  return (
    <UserDropdownItemContainer>
      <div className="dropdown-item dropdown-item-check">
        {isCheck && <Check />}
      </div>
      <div className="dropdown-item">
        <img src={img} alt="profile" />
      </div>
      <div className="dropdown-item">
        <span>{name}</span>
      </div>
    </UserDropdownItemContainer>
  );
};

export default UserDropdownItem;
