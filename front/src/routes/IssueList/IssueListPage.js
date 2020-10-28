import React, { useState } from 'react';
import IssueListContainer from './IssueListContainer';

function IssueListPage() {
  const [checkedIssues, setCheckedIssues] = useState({
    issues: issueItems.map((issue) => {
      return { ...issue, checked: false };
    }),
    allIssue: false,
  });

  return (
    <>
      <IssueListContainer
        checkedIssues={checkedIssues}
        setCheckedIssues={setCheckedIssues}
      ></IssueListContainer>
    </>
  );
}
export default IssueListPage;
