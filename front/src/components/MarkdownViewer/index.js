import React from 'react';
import ReactMarkDown from 'react-markdown';
import gfm from 'remark-gfm';
import styled from 'styled-components';

const ViewerContainer = styled.div`
  width: 100%;
  min-height: 230px;
  padding: 0.25rem 0.25rem 1rem;
`;

const MarkdownViewer = ({ markdown }) => {
  return (
    <ViewerContainer>
      <ReactMarkDown plugins={[gfm]}>{markdown}</ReactMarkDown>
    </ViewerContainer>
  );
};

export default MarkdownViewer;
