import React, { useState } from 'react';
import styled from 'styled-components';
import color from './color';

const DropDownContainer = styled.div`
  display: inline-flex;
  flex: fit-content;
  position: relative;
`;
const DropDownButton = styled.button`
  flex-basis: fit-content;
  background-color: transparent;
  border: none;
  &:hover {
    cursor: pointer;
  }
`;
const DropDownMenu = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1.3rem;
  position: absolute;
  border: 1px solid ${color.boldBlue};
  border-radius: 0.2rem;
  background-color: white;
  z-index: 1;
`;
const Header = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.3rem;
  font-weight: bolder;

  .header-title {
    min-width: max-content;
  }
`;
const HeaderSubContianer = styled.div`
  display: flex;
  felx-direction: row;
`;
const DropDownBody = styled.div`
  width: 100%;
`;
const CloseButton = styled.div`
  width: fit-content;
  margin-left: 30px;
  color: grey;
  &: hover {
    cursor: pointer;
    color: black;
  }
`;
const Icon = styled.img`
  width: 0.5rem;
  height: 0.5rem;
`;
const DropDown = ({ title, filter, children }) => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleHandler = () => {
    setShowMenu(!showMenu);
  };
  return (
    <DropDownContainer>
      <DropDownButton onClick={toggleHandler}>
        {title}
        <Icon src="https://img.icons8.com/material-rounded/24/000000/give-way.png" />
      </DropDownButton>
      {showMenu ? (
        <DropDownMenu>
          <DropDownHeader
            filter={filter}
            title={title}
            toggleHandler={toggleHandler}
          />
          <DropDownBody>{children}</DropDownBody>
        </DropDownMenu>
      ) : null}
    </DropDownContainer>
  );
};

const DropDownHeader = ({ filter = false, title, toggleHandler }) => {
  const headerTitle = `Filter by ${title}`;
  return (
    <Header>
      <HeaderSubContianer>
        <div className="header-title">{headerTitle}</div>
        <CloseButton onClick={toggleHandler}>
          <Icon src="https://img.icons8.com/material-rounded/24/000000/delete-sign.png" />
        </CloseButton>
      </HeaderSubContianer>
      <HeaderSubContianer>
        {filter ? <input type="text" /> : null}
      </HeaderSubContianer>
    </Header>
  );
};

export default DropDown;
