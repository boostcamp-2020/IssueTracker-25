import React from 'react';
import styled from 'styled-components';

const LabelItem = styled.div`
  display: inline-block;
  margin: 0 0.5rem;
  padding: 0.2rem 0.5rem;
  border-radius: 1rem;

  background: ${({ color }) => color};
  color: white;
  mix-blend-mode: difference;
`;
function Label({ label, children }) {
  return (
    <LabelItem className="Label" color={label.color}>
      {children}
    </LabelItem>
  );
}

export default Label;
