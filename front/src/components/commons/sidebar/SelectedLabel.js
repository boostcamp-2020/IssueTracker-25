import React from 'react';
import Label from '../Label';

const SelectedLabel = ({ labels, selectedLabels, message }) => {
  return (
    <>
      {selectedLabels.size ? (
        <div>
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
        </div>
      ) : (
        <div> {message}</div>
      )}
    </>
  );
};
export default SelectedLabel;
