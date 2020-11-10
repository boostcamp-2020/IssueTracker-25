import React from 'react';
import MilestoneProgress from '../MilestoneProgress';

const SelectedMilestone = ({ selectedMilestone, milestones = [], message }) => {
  const assignedMilestone = milestones.find(
    (milestone) => +milestone.id === selectedMilestone,
  );
  return assignedMilestone ? (
    <>
      <MilestoneProgress
        createdAt={assignedMilestone.createdAt}
        endDate={assignedMilestone.endDate}
      />
      <div>{assignedMilestone.title}</div>
    </>
  ) : (
    <>{message}</>
  );
};

export default SelectedMilestone;
