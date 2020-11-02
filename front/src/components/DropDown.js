import React, { useState } from 'react';
import styled from 'styled-components';
import color from './color';

const DropdownContainer = styled.div`
  display: inline-flex;
  position: relative;
`;

const DropdownButton = styled.button`
  background: transparent;
  border: none;
`;

const DropdownMenu = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1.8rem;
  position: absolute;
  border: 1px solid ${color.boldBlue};
  border-radius: 0.2rem;
  background-color: white;
  z-index: 11;
`;

const DropdownBody = styled.div`
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

const DropdownOverlay = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
`;

const CloseButton = styled.div`
  width: fit-content;
  margin-left: 4rem;
  &: hover {
    cursor: pointer;
  }
`;

const Dropdown = ({ headerText, button, children }) => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleHandler = () => setShowMenu(!showMenu);

  return (
    <DropdownContainer>
      <DropdownButton className="dropdown-button" onClick={toggleHandler}>
        {button}
      </DropdownButton>
      {showMenu && (
        <>
          <DropdownOverlay onClick={toggleHandler} />
          <DropdownMenu className="dropdown-menu">
            <DropdownHeader
              headerText={headerText}
              toggleHandler={toggleHandler}
            />
            <DropdownBody className="dropdown-body">{children}</DropdownBody>
          </DropdownMenu>
        </>
      )}
    </DropdownContainer>
  );
};

const DropdownHeader = ({ headerText, toggleHandler }) => {
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

export default Dropdown;
