import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import color from './color';
import useOutSideClick from './useOutsideClick';

const DropDownContainer = styled.div`
  display: inline-flex;
  position: relative;
`;
const DropdownButton = styled.button`
  background: transparent;
  border: none;
`;
const DropDownMenu = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1.8rem;
  position: absolute;
  border: 1px solid ${color.boldBlue};
  border-radius: 0.2rem;
  background-color: white;
  z-index: 1;
`;
const DropDownBody = styled.div`
  width: 100%;
`;
const Header = styled.div`
  display: flex;
  flex-direction: row;
  padding: 0.3rem;
  font-weight: bolder;

  .header-title {
    min-width: max-content;
  }
`;
// close button
const CloseButton = styled.div`
  width: fit-content;
  margin-left: 4rem;
  &: hover {
    cursor: pointer;
  }
`;

const DropDown = ({ headerText, button, children }) => {
  const [showMenu, setShowMenu] = useState(false);
  const ref = useRef();

  const toggleHandler = () => {
    setShowMenu(!showMenu);
  };
  const closeHandler = () => {
    setShowMenu(false);
  };
  useOutSideClick(ref, closeHandler);

  return (
    <DropDownContainer ref={ref}>
      <DropdownButton className="dropdown-button" onClick={toggleHandler}>
        {button}
      </DropdownButton>
      {showMenu ? (
        <DropDownMenu className="dropdown-menu">
          <DropDownHeader
            headerText={headerText}
            toggleHandler={toggleHandler}
          />
          <DropDownBody className="dropdown-body">{children}</DropDownBody>
        </DropDownMenu>
      ) : null}
    </DropDownContainer>
  );
};

const DropDownHeader = ({ headerText, toggleHandler }) => {
  return (
    <Header>
      <div className="dropdown-header">{headerText}</div>
      <CloseButton className="dropdown-button-close" onClick={toggleHandler}>
        <img
          className="button-image"
          src="https://img.icons8.com/material-rounded/24/000000/delete-sign.png"
          alt="close"
        />
      </CloseButton>
    </Header>
  );
};

export default DropDown;
