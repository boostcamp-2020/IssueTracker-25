import React from 'react';
import styled from 'styled-components';
import color from '../../libs/color';
import utils from '../../libs/utils';

const ProgressBar = styled.div`
  height: 1rem;

  background: ${color.lightGray};
  border-radius: 0.4rem;

  .progres-bar__progress {
    height: 1rem;
    width: ${({ progressRate }) => progressRate}%;

    background: ${color.green};
    border-radius: 0.4rem 0 0 0.4rem;
  }
`;

const MilestoneProgress = ({ createdAt, endDate }) => {
  const progressRate = utils.getProgressRate(createdAt, endDate);
  return (
    <>
      <ProgressBar progressRate={progressRate}>
        <div className="progres-bar__progress" />
      </ProgressBar>
    </>
  );
};

export default MilestoneProgress;
