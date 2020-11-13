import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import CustomInput from '../../commons/CustomInput';
import MarkdownEditor from '../../../models/markdown-editor';
import CustomButton from '../../commons/buttons/CustomButton';
import color from '../../../libs/color';
import ArrowContainerStyled from '../../commons/ArrowContainerStyle';

const TITLE_PLACEHOLDER = 'Title';

const ContentContainer = styled(ArrowContainerStyled)`
  padding: 1rem;
  border: 1px solid ${color.lightGray};
  background: ${color.white};

  .issue-register-contents__button-group {
    display: flex;
    justify-content: space-between;
  }
`;

const FormGroup = styled.div`
  & + & {
    margin-top: 1rem;
  }
`;

const IssueRegisterContent = ({
  onSave,
  updateTitle,
  contents,
  updateContents,
  submitButtonDisabled,
}) => {
  return (
    <ContentContainer>
      <FormGroup>
        <CustomInput
          placeholder={TITLE_PLACEHOLDER}
          onChange={(value) => updateTitle(value)}
        />
      </FormGroup>
      <FormGroup>
        <MarkdownEditor contents={contents} updateContents={updateContents} />
      </FormGroup>

      <FormGroup className="issue-register-contents__button-group">
        <Link to="/">
          <CustomButton>Cancel</CustomButton>
        </Link>
        <CustomButton
          style={{ color: 'green' }}
          handleClick={onSave}
          disabled={submitButtonDisabled}
        >
          Submit new Issue
        </CustomButton>
      </FormGroup>
    </ContentContainer>
  );
};

export default IssueRegisterContent;
