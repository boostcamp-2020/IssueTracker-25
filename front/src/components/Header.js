import React from 'react';
import styled from 'styled-components';
import color from './color';

const Header = styled.header`
  display: flex;
  height: 4rem;
  background: ${color.mainBlack};
  align-items: center;
  text-align: center;

  & .header-title {
    margin: 0 auto;
    color: ${color.mainWhite};
    font-weight: 400;
    font-size: 1.3rem;
  }
`;

const HeaderComponents = () => {
  return (
    <Header>
      <div className="header-title">ISSUES</div>
    </Header>
  );
};

export default HeaderComponents;
