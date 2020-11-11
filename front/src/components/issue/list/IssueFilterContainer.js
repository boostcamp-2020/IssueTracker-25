import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import CustomButton from '../../commons/buttons/CustomButton';
import MovePageButton from '../../commons/buttons/MovePageButton';
import IssueFilterButton from './IssueFilterButton';
import routeUrl from '../../../libs/routeUrl';

const Div = styled.div`
  margin: 2rem 0;
`;

const Nav = styled.nav`
  display: inline-block;
`;

function IssueFilterContainer() {
  return (
    <Div>
      <IssueFilterButton />
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
      <Link to={routeUrl.NEW_ISSUES}>
        <CustomButton style={{ color: 'green' }}>New Issue</CustomButton>
      </Link>
    </Div>
  );
}

export default IssueFilterContainer;
