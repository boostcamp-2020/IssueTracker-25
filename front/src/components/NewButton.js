import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import color from './color';

const StyledNewButton = styled.button`
  width: fit-content;
  height: 2.5rem;
  border-radius: 0.4rem;

  background: ${color.green};

  color: white;
  font-size: 1rem;
`;

function NewButton({ handleClick, children }) {
  return <StyledNewButton onClick={handleClick}>{children}</StyledNewButton>;
}

NewButton.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.string]).isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default NewButton;
