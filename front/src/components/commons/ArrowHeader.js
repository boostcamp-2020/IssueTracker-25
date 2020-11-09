import React from 'react';
import styled from 'styled-components';
import color from '../../libs/color';

const Header = styled.div`
  position: relative;
  &::before {
    width: 1rem;
    z-index: -1;
    height: 1rem;
    content: '';
    background: ${color.lightGray};
    position: absolute;
    transform: rotate(45deg);
    left: -8px;
    top: 9px;
  }
  flex: 1;
  margin-left: 1.5rem;
  border: 1px solid ${color.lightGray};
`;
const ArrowHeader = ({ children }) => {
  return <Header>{children}</Header>;
};

export default ArrowHeader;
