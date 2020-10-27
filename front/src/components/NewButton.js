import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledButton = styled.button`
  width: fit-content;
  height: 2.5rem;
  border-radius: 0.4rem;

  background: #2da44f;
  color: white;

  font-size: 1rem;
`;

function NewButton(props) {
  const { title, handleClick } = props;
  return <StyledButton onClick={handleClick}>{title}</StyledButton>;
}

NewButton.propTypes = {
  title: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default NewButton;
