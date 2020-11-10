import React from 'react';

const ContentsLengthLayer = ({ className, length }) => {
  return <div className={className}>{length} characters</div>;
};

export default ContentsLengthLayer;
