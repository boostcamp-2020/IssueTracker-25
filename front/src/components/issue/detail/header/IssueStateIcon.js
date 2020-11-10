import React from 'react';
import styled from 'styled-components';
import * as Icons from '../../../icons';
import color from '../../../../libs/color';

const StateIconContainer = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border-radius: 20rem;
  padding: 0.4rem 0.6rem;
  color: ${color.white};
  &.closed {
    background: ${color.red};
  }
  &.open {
    background: ${color.green};
  }
`;

const StateIconText = styled.span`
  margin-left: 0.5rem;
`;

const IssueStateIcon = ({ isClosed }) => {
  const className = isClosed ? 'closed' : 'open';
  const stateText = isClosed ? 'Closed' : 'Open';
  return (
    <StateIconContainer className={className}>
      {isClosed ? <Icons.ClosedIcon /> : <Icons.OpenIcon />}
      <StateIconText>{stateText}</StateIconText>
    </StateIconContainer>
  );
};

export default IssueStateIcon;
