import React from 'react';
import { UserProfile } from '../UserProfile';

const SelectedAssignee = ({
  assignees,
  selectedAssignees,
  assigneeSelectHandler,
  message,
}) => {
  return (
    <>
      {selectedAssignees.size ? (
        <div>
          {[...selectedAssignees].map((selectedAssigneeId) => {
            const assignedUser = assignees.find(
              (assignee) => +assignee.id === +selectedAssigneeId,
            );
            return (
              assignedUser && (
                <div>
                  <UserProfile src={assignedUser.profileLink} size="sm" />
                  <span>{assignedUser.name}</span>
                </div>
              )
            );
          })}
        </div>
      ) : (
        <button
          type="button"
          data-user-id={null}
          onClick={assigneeSelectHandler}
        >
          {message}
        </button>
      )}
    </>
  );
};

export default SelectedAssignee;
