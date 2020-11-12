import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import color from '../../../../libs/color';
import CustomButton from '../../../commons/buttons/CustomButton';
import IssueHeaderInfo from '../../../commons/issue/IssueHeaderInfo';
import routeUrl from '../../../../libs/routeUrl';

const IssueDetailHeaderContainer = styled.div`
  margin-bottom: 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid ${color.lightGray};

  .issue-detail-header {
    &__title-container {
      display: flex;
      vertical-align: middle;
      margin-bottom: 0.5rem;
    }

    &__title {
      flex: 1;
      font-size: 2rem;
      font-weight: 900;
    }

    &__buttons {
      flex: 0 0 auto;
      button + button {
        margin-left: 0.3rem;
      }
    }
  }
`;

const IssueDetailHeader = ({
  issue,
  editTitleClickHandler,
  countOfComments,
}) => {
  return (
    <IssueDetailHeaderContainer>
      <div className="issue-detail-header__title-container">
        <div className="issue-detail-header__title">{issue.title}</div>
        <div className="issue-detail-header__buttons">
          {issue.isAuthor && (
            <CustomButton
              style={{ color: 'default' }}
              handleClick={editTitleClickHandler}
            >
              Edit
            </CustomButton>
          )}
          <Link to={routeUrl.NEW_ISSUES}>
            <CustomButton style={{ color: 'green' }}>New issue</CustomButton>
          </Link>
        </div>
      </div>
      <IssueHeaderInfo issue={issue} countOfComments={countOfComments} />
    </IssueDetailHeaderContainer>
  );
};

export default IssueDetailHeader;
