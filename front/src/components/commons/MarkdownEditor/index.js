import React, { useState } from 'react';
import styled from 'styled-components';
import CustomTextarea from './CustomTextarea';
import UploadInput from './UploadInput';
import ContentsLengthLayer from './ContentsLengthLayer';
import color from '../../../libs/color';

const DELAY = 2000;

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

let debounceTimer;

const MarkdownEditor = ({ onChange }) => {
  const [contentsLength, setContentsLength] = useState(0);
  const [showContentsLength, setShowContentsLength] = useState(false);

  const setHideContentsLengthTimer = () => {
    setTimeout(() => {
      setShowContentsLength(false);
    }, DELAY);
  };

  const setShowContentsLengthDebounce = (newContentsLength) => {
    if (debounceTimer) {
      clearTimeout(debounceTimer);
    }
    debounceTimer = setTimeout(() => {
      setShowContentsLength(true);
      setContentsLength(newContentsLength);
      setHideContentsLengthTimer();
    }, DELAY);
  };

  const updateContents = (newContents) => {
    onChange(newContents);
    setShowContentsLengthDebounce(newContents.length);
  };

  return (
    <EditorContainer>
      <EditorInputContainer>
        <CustomTextarea onChange={updateContents} />
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
