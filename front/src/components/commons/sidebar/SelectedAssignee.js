import React from 'react';
import { UserProfile } from '../UserProfile';

const SelectedAssigneeItem = ({ assignedUser }) => {
  return (
    <div>
      <UserProfile src={assignedUser.profileLink} size="sm" />
      <span>{assignedUser.name}</span>
    </div>
  );
};

const SelectedAssigneeContainer = ({ selectedAssignees, assignees }) => {
  return (
    <div>
      {[...selectedAssignees].map((selectedAssigneeId) => {
        const assignedUser = assignees.find(
          (assignee) => +assignee.id === +selectedAssigneeId,
        );
        return (
          assignedUser && <SelectedAssigneeItem assignedUser={assignedUser} />
        );
      })}
    </div>
  );
};
const SelectedAssignee = ({
  assignees,
  selectedAssignees,
  assigneeSelectHandler,
  message,
}) => {
  return (
    <>
      {selectedAssignees.size ? (
        <SelectedAssigneeContainer
          selectedAssignees={selectedAssignees}
          assignees={assignees}
        />
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
