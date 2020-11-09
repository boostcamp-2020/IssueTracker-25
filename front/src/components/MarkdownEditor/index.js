import React from 'react';
import styled from 'styled-components';
import CustomTextarea from './CustomTextarea';
import UploadInput from './UploadInput';
import color from '../../libs/color';

const EditorContainer = styled.div`
  width: 100%;
  border: 1px solid ${color.lightGray};
  border-radius: 0.3rem;
  background: ${color.lightBlue};
`;

const MarkdownEditor = () => {
  return (
    <EditorContainer>
      <CustomTextarea />
      <UploadInput />
    </EditorContainer>
  );
};

export default MarkdownEditor;
