import React from 'react';
import Label from '../Label';

const SelectedLabelContainer = ({ selectedLabels, labels }) => {
  return (
    <span>
      {[...selectedLabels].map((selectedLabelId) => {
        const assignedLabel = labels.find(
          (label) => +label.id === +selectedLabelId,
        );
        return (
          assignedLabel && (
            <Label label={assignedLabel}>{assignedLabel.name}</Label>
          )
        );
      })}
    </span>
  );
};
const SelectedLabel = ({ labels, selectedLabels, message }) => {
  return (
    <>
      {selectedLabels.size ? (
        <SelectedLabelContainer
          labels={labels}
          selectedLabels={selectedLabels}
        />
      ) : (
        <div> {message}</div>
      )}
    </>
  );
};
export default SelectedLabel;
