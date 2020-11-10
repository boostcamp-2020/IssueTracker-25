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

const CustomTextarea = ({ onChange }) => {
  return <TextArea onChange={({ target: { value } }) => onChange(value)} />;
};

export default CustomTextarea;
