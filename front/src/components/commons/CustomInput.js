import React from 'react';
import styled from 'styled-components';
import color from '../../libs/color';

const Input = styled.input`
  width: 100%;
  border: 1px solid ${color.lightGray};
  border-radius: 0.25rem;
  background: ${color.lightBlue};
  line-height: 1.5rem;
  padding: 0.5rem 0.8rem;

  &:focus {
    background: ${color.white};
  }
`;

const CustomInput = ({ placeholder, value, onChange }) => {
  return (
    <Input
      placeholder={placeholder}
      value={value}
      onChange={({ target: { value: newValue } }) => onChange(newValue)}
    />
  );
};

export default CustomInput;
