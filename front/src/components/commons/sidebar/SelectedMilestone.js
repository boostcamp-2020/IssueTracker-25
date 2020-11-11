import React from 'react';
import MilestoneProgress from '../MilestoneProgress';

const SelectedMilestoneContainer = ({ assignedMilestone }) => {
  return (
    <>
      <MilestoneProgress
        createdAt={assignedMilestone.createdAt}
        endDate={assignedMilestone.endDate}
      />
      <div>{assignedMilestone.title}</div>
    </>
  );
};

const SelectedMilestone = ({ selectedMilestone, milestones = [], message }) => {
  const assignedMilestone = milestones.find(
    (milestone) => +milestone.id === selectedMilestone,
  );
  return assignedMilestone ? (
    <SelectedMilestoneContainer assignedMilestone={assignedMilestone} />
  ) : (
    <>{message}</>
  );
};

export default SelectedMilestone;
