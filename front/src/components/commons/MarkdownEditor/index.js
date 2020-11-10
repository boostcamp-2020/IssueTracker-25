import React from 'react';
import styled from 'styled-components';
import CustomTextarea from './CustomTextarea';
import UploadInput from './UploadInput';
import ContentsLengthLayer from './ContentsLengthLayer';
import color from '../../../libs/color';

const EditorContainer = styled.div`
  width: 100%;
  border: 1px solid ${color.lightGray};
  border-radius: 0.3rem;
  background: ${color.lightBlue};
`;

const EditorInputContainer = styled.div`
  position: relative;

  .markdown-editor__content-length {
    position: absolute;
    bottom: 0.8rem;
    right: 1rem;
  }
`;

const MarkdownEditor = ({ contentsLength, showContentsLength, onChange }) => {
  return (
    <EditorContainer>
      <EditorInputContainer>
        <CustomTextarea onChange={onChange} />
        {showContentsLength && (
          <ContentsLengthLayer
            className="markdown-editor__content-length"
            length={contentsLength}
          />
        )}
      </EditorInputContainer>
      <UploadInput />
    </EditorContainer>
  );
};

export default MarkdownEditor;
