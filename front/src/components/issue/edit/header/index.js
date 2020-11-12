import React from 'react';
import styled from 'styled-components';
import color from '../../../../libs/color';
import CustomButton from '../../../commons/buttons/CustomButton';
import CustomInput from '../../../commons/CustomInput';
import IssueHeaderInfo from '../../../commons/issue/IssueHeaderInfo';

const IssueEditHeaderContainer = styled.div`
  margin-bottom: 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid ${color.lightGray};

  .issue-edit-header {
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

const IssueEditHeader = ({
  issue,
  updateTitle,
  onTitleSave,
  cancelTitleClickHandler,
  countOfComments,
}) => {
  return (
    <IssueEditHeaderContainer>
      <div className="issue-edit-header__title-container">
        <div className="issue-edit-header__title">
          <CustomInput onChange={(value) => updateTitle(value)} />
        </div>
        <div className="issue-edit-header__buttons">
          <CustomButton style={{ color: 'default' }} handleClick={onTitleSave}>
            Save
          </CustomButton>
          <CustomButton
            style={{ color: 'whiteRed' }}
            handleClick={cancelTitleClickHandler}
          >
            Cancel
          </CustomButton>
        </div>
      </div>
      <IssueHeaderInfo issue={issue} countOfComments={countOfComments} />
    </IssueEditHeaderContainer>
  );
};

export default IssueEditHeader;
