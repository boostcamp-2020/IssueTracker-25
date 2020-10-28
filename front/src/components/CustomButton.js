import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import theme from './ColorStyle';

const Button = styled.button`
  width: fit-content;
  border: 0.1rem solid;
  border-radius: 0.4rem;
  padding: 0.5rem;
  ${(props) => props.style};
`;

function CustomButton({ handleClick, children, style = {} }) {
  const colorStyle = theme[style.color] || theme.default;
  const fontSize = style.size === 'sm' ? '0.8rem' : '1rem';
  return (
    <Button style={{ fontSize, ...colorStyle }} onClick={handleClick}>
      {children}
    </Button>
  );
}

CustomButton.propTypes = {
  handleClick: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.string]).isRequired,
  style: PropTypes.objectOf(PropTypes.object).isRequired,
};
export default CustomButton;
