import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import color from '../../libs/color';
import routeUrl from '../../libs/routeUrl';

const Header = styled.header`
  display: flex;
  height: 4rem;
  background: ${color.black};
  align-items: center;
  justify-content: center;

  & .header-title {
    margin: 0 auto;
    color: ${color.white};
    font-weight: 400;
    font-size: 1.3rem;
  }
`;

const HeaderComponents = () => {
  return (
    <Header>
      <Link to={routeUrl.MAIN}>
        <div className="header-title">ISSUES</div>
      </Link>
    </Header>
  );
};

export default HeaderComponents;
