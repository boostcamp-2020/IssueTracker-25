import React from 'react';
import styled from 'styled-components';
import CustomButton from '../../components/buttons/CustomButton';

const IssueDetailContainer = styled.div`
  display: grid;
  grid-auto-rows: minmax(200px, auto);
  grid-template-columns: 2fr 1fr;
  .issue-detail-header {
    grid-column: 1 / 3;
    grid-row: 1;
    background: lightgray;

    &__title {
      font-size: 2rem;
      font-weight: 900;
    }
  }

  .issue-detail-aside {
    grid-column: 2;
    grid-row: 2;
    background: yellow;
  }
  .issue-detail-content {
    grid-column: 1;
    grid-row: 2;
    background: red;
  }
`;

const IssueDetailPage = ({ data }) => {
  const { title, userId, isClosed, createAt, closedAt, countComment } = data;
  const issueState = `${userId} ${isClosed ? 'closed' : 'opend'} this issue ${
    isClosed ? closedAt : createAt
  } ㆍ ${countComment || 0} comments`;
  return (
    <IssueDetailContainer>
      <div className="issue-detail-header">
        <div className="issue-detail-subheader">
          <div className="issue-detail-header__title">{title}</div>
          <div className="issue-detail-header__button">
            <CustomButton style={{ color: 'default' }}>Edit</CustomButton>
            <CustomButton style={{ color: 'green' }}>New issue</CustomButton>
          </div>
        </div>
        <div className="issue-detail-subheader">
          <CustomButton style={{ color: 'green' }}>Open</CustomButton>
          <span>{issueState}</span>
        </div>
      </div>
      <div className="issue-detail-content" />
      <div className="issue-detail-aside" />
    </IssueDetailContainer>
  );
};

export default IssueDetailPage;
