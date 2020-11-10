import React, { useState, useEffect } from 'react';
import MarkdownEditorComponent from '../../components/commons/MarkdownEditor';

const DELAY = 2000;

let debounceTimer;

const MarkdownEditor = ({ onChange }) => {
  const [contentsLength, setContentsLength] = useState(0);
  const [showContentsLength, setShowContentsLength] = useState(false);

  const clearTimer = () => {
    if (debounceTimer) {
      clearTimeout(debounceTimer);
    }
  };

  useEffect(() => {
    return clearTimer;
  }, []);

  const setHideContentsLengthTimer = () => {
    setTimeout(() => {
      setShowContentsLength(false);
    }, DELAY);
  };

  const setShowContentsLengthDebounce = (newContentsLength) => {
    const debounceCallback = () => {
      setShowContentsLength(true);
      setContentsLength(newContentsLength);
      setHideContentsLengthTimer();
    };

    clearTimer();
    debounceTimer = setTimeout(debounceCallback, DELAY);
  };

  const updateContents = (newContents) => {
    onChange(newContents);
    setShowContentsLengthDebounce(newContents.length);
  };

  return (
    <MarkdownEditorComponent
      onChange={updateContents}
      showContentsLength={showContentsLength}
      contentsLength={contentsLength}
    />
  );
};

export default MarkdownEditor;
