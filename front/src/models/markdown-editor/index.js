import React, { useState, useEffect } from 'react';
import MarkdownEditorComponent from '../../components/commons/MarkdownEditor';

const DELAY = 2000;

let debounceTimer;

const MarkdownEditor = ({ onChange }) => {
  const [contents, setContents] = useState('');
  const [contentsLength, setContentsLength] = useState(0);
  const [showContentsLength, setShowContentsLength] = useState(false);

  useEffect(() => {
    onChange(contents);
    setShowContentsLengthDebounce(contents.length);
    return clearTimer;
  }, [contents]);

  const clearTimer = () => {
    if (debounceTimer) {
      clearTimeout(debounceTimer);
    }
  };

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
    setContents(newContents);
  };

  return (
    <MarkdownEditorComponent
      value={contents}
      onChange={updateContents}
      showContentsLength={showContentsLength}
      contentsLength={contentsLength}
    />
  );
};

export default MarkdownEditor;
