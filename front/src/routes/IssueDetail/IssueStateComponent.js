import React from 'react';
import * as Icon from '../../components/Icon';

const IssueStateComponent = ({ isClosed, issueState }) => {
  return (
    <div className="issue-detail-subheader">
      <div
        className={`state-icon issue-detail-subheader--${
          isClosed ? 'closed' : 'open'
        }`}
      >
        {isClosed ? (
          <>
            <Icon.ClosedIconComponent />
            <div className="state-icon__content">Closed</div>
          </>
        ) : (
          <>
            <Icon.OpenIconComponent />
            <div className="state-icon__content">Open</div>
          </>
        )}
      </div>
      <span className="state-message">{issueState}</span>
    </div>
  );
};

export default IssueStateComponent;
