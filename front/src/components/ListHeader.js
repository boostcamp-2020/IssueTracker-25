import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import color from '../libs/color';

const HeaderDiv = styled.div`
  padding: 1rem;
  background-color: ${color.lightBlue};
`;

function ListHeader({ children }) {
  return <HeaderDiv>{children}</HeaderDiv>;
}

ListHeader.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.element]).isRequired,
};

export default ListHeader;
