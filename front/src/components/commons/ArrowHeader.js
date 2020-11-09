import React from 'react';
import styled from 'styled-components';
import color from '../../libs/color';

const Header = styled.div`
  position: relative;
  &::before {
    width: 0.8rem;
    height: 0.8rem;
    content: '';
    background: ${(prop) =>
      prop.background ? prop.background : color.lightGray};
    position: absolute;
    transform: rotate(45deg);
    left: -8px;
    top: 9px;
    border-left: 1px solid ${color.lightGray};
    border-bottom: 1px solid ${color.lightGray};
  }
  flex: 1;
  background: ${(prop) =>
    prop.background ? prop.background : color.lightGray};
  border-bottom: 1px solid ${color.lightGray};
`;
const ArrowHeader = ({ children, className, background }) => {
  return (
    <Header className={className || ''} background={background}>
      {children}
    </Header>
  );
};

export default ArrowHeader;
