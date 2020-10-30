import React from 'react';
import styled from 'styled-components';
import CustomButton from '../../components/buttons/CustomButton';
import MovePageButton from '../../components/buttons/MovePageButton';

const Div = styled.div`
  margin: 2rem 0;
`;

const Nav = styled.nav`
  display: inline-block;
`;

function IssueFilterContainer() {
  return (
    <Div>
      <CustomButton>Filters</CustomButton>
      <input
        name="issue-filter"
        type="text"
        value="is:open is:issue"
        placeholder="Search all issues"
      />
      <Nav>
        <MovePageButton className="label-page-button" name="Labels" />
        <MovePageButton className="milestone-page-button" name="Milestones" />
      </Nav>
      <CustomButton style={{ color: 'green' }}>New Issue</CustomButton>
    </Div>
  );
}

export default IssueFilterContainer;
