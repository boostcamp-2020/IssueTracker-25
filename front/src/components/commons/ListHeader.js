import React from 'react';
import styled from 'styled-components';
import color from '../../libs/color';

const HeaderDiv = styled.div`
  padding: 1rem;
  background-color: ${color.lightBlue};
`;

function ListHeader({ children }) {
  return <HeaderDiv>{children}</HeaderDiv>;
}

export default ListHeader;
