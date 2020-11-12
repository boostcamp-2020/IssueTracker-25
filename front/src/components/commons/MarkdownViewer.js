import React from 'react';
import ReactMarkDown from 'react-markdown';
import gfm from 'remark-gfm';
import styled from 'styled-components';

const ViewerContainer = styled.div`
  width: 100%;
  padding: 0.25rem 1rem 1rem;

  img {
    max-width: 100%;
  }
`;

const MarkdownViewer = ({ children }) => {
  return (
    <ViewerContainer>
      <ReactMarkDown plugins={[gfm]}>{children}</ReactMarkDown>
    </ViewerContainer>
  );
};

export default MarkdownViewer;
