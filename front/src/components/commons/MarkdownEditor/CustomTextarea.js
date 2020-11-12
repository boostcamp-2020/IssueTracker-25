import React from 'react';
import styled from 'styled-components';
import color from '../../../libs/color';

const TextArea = styled.textarea`
  width: 100%;
  min-height: 230px;
  padding: 1rem;
  border: none;
  border-bottom: 1px dashed ${color.lightGray};
  background: inherit;
  resize: vertical;
  vertical-align: top;
`;

const CustomTextarea = ({ value, onChange }) => {
  return (
    <TextArea
      value={value}
      onChange={({ target: { value: newValue } }) => onChange(newValue)}
    />
  );
};

export default CustomTextarea;
