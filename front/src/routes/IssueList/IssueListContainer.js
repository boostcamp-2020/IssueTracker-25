import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import color from '../../components/color';
import ListHeader from '../../components/ListHeader';

const CustomCheckBoxButton = styled.button`
  width: 1rem;
  height: 1rem;

  background-color: ${({ checked }) => (checked ? color.blue : 'white')};
`;
const IssueList = styled.div`
  border: 1px solid ${color.boldBlue};
`;
const IssueItemContainer = styled.li`
  border-top: 1px solid ${color.boldBlue};
  padding: 1rem;
`;

const Ul = styled.ul`
  margin: 0;
  padding: 0;

  list-style-type: none;
`;
function IssueListHeader({ setCheckedIssues, checkedIssues }) {
  const { issues, allIssue } = checkedIssues;

  const checkBoxClickHandler = () => {
    const updatedIssues = setAllIssueChecked(issues, !allIssue);
    setCheckedIssues({
      issues: updatedIssues,
      allIssue: !allIssue,
    });
  };

  const setAllIssueChecked = (issues, value) =>
    issues.map((issue) => {
      issue.checked = value;
      return issue;
    });

  return (
    <>
      <CustomCheckBoxButton
        type="button"
        checked={allIssue}
        onClick={checkBoxClickHandler}
      ></CustomCheckBoxButton>
    </>
  );
}

function IssueItem({ issue, checkBoxClickHandler }) {
  const { id, title, checked } = issue;
  return (
    <IssueItemContainer>
      <CustomCheckBoxButton
        type="button"
        checked={checked}
        onClick={checkBoxClickHandler}
        id={id}
      ></CustomCheckBoxButton>
      <div className="issue__title">{title}</div>
    </IssueItemContainer>
  );
}

function IssueListBody({ issues, setCheckedIssues }) {
  const checkBoxClickHandler = ({ target }) => {
    const { id } = target;
    const updatedIssues = toggleIssue(issues, id);
    setCheckedIssues({
      issues: updatedIssues,
      allIssue: isAllChecked(updatedIssues),
    });
  };

  const isAllChecked = (issues) =>
    issues.every((issue) => issue.checked === true);

  const toggleIssue = (issues, id) => {
    return issues.map((issue) => {
      if (+issue.id === +id) {
        issue.checked = !issue.checked;
      }
      return issue;
    });
  };

  return (
    <Ul>
      {issues.map((issue) => (
        <IssueItem
          key={issue.id}
          issue={issue}
          checkBoxClickHandler={checkBoxClickHandler}
        ></IssueItem>
      ))}
    </Ul>
  );
}

function IssueListContainer({ checkedIssues, setCheckedIssues }) {
  const { issues } = checkedIssues;
  return (
    <>
      <IssueList>
        <ListHeader>
          <IssueListHeader
            setCheckedIssues={setCheckedIssues}
            checkedIssues={checkedIssues}
          />
        </ListHeader>
        <IssueListBody
          setCheckedIssues={setCheckedIssues}
          issues={issues}
        ></IssueListBody>
      </IssueList>
    </>
  );
}

export default IssueListContainer;
