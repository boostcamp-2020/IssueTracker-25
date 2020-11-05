import React from 'react';
import styled from 'styled-components';
import CustomButton from '../../components/buttons/CustomButton';
import color from '../../libs/color';

const IssueDetailContainer = styled.div`
  display: grid;
  grid-auto-rows: minmax(120px, auto);
  grid-template-columns: 2fr 1fr;
  .issue-detail-header {
    grid-column: 1 / 3;
    grid-row: 1;
    display: inline-block;
    vertical-align: middle;

    &__title {
      font-size: 2rem;
      font-weight: 900;
    }

    &__button {
      margin-left: auto;
      & button {
        margin-left: 0.3rem;
      }
    }
    &__divider {
      margin: 1rem 0;
      border: 1px solid ${color.lightGray};
    }
  }

  .issue-detail-subheader {
    display: flex;
    align-items: center;
  }

  .button-text {
    padding: 0 0.2rem;
  }
  .state-message {
    text-indent: 0.5rem;
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
          <CustomButton
            className="state-button"
            type="button"
            style={{ color: 'green' }}
          >
            <svg
              height="16"
              className="octicon octicon-issue-opened"
              viewBox="0 0 16 16"
              version="1.1"
              width="16"
              aria-hidden="true"
              fill="white"
            >
              <path
                fillRule="evenodd"
                d="M8 1.5a6.5 6.5 0 100 13 6.5 6.5 0 000-13zM0 8a8 8 0 1116 0A8 8 0 010 8zm9 3a1 1 0 11-2 0 1 1 0 012 0zm-.25-6.25a.75.75 0 00-1.5 0v3.5a.75.75 0 001.5 0v-3.5z"
              />
            </svg>
            <span className="button-text">Open</span>
          </CustomButton>
          <span className="state-message">{issueState}</span>
        </div>
        <div className="issue-detail-header__divider" />
      </div>
      <div className="issue-detail-content" />
      <div className="issue-detail-aside" />
    </IssueDetailContainer>
  );
};

export default IssueDetailPage;
