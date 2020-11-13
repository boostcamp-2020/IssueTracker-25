import React from 'react';
import styled from 'styled-components';
import color from '../../../../libs/color';
import { UserProfile } from '../../../commons/UserProfile';
import ArrowContainerStyle from '../../../commons/ArrowContainerStyle';
import MarkdownEditor from '../../../../models/markdown-editor';
import CustomButton from '../../../commons/buttons/CustomButton';
import ClosedIcon from '../../../icons/ClosedIcon';

const CommentInputContainer = styled.div`
  display: flex;
`;

const ProfileContainer = styled.div`
  flex: 0;
  margin-right: 0.5rem;
`;

const InputContainer = styled.div`
  flex: 1 1 auto;
  border: 1px solid ${color.lightGray};
  border-radius: 0.3rem;

  @media (min-width: 768px) {
    margin-left: 1rem;
  }
`;

const InputHeader = styled(ArrowContainerStyle)`
  background: ${color.lightBlue};
  border-bottom: 1px solid ${color.lightGray};
  padding: 1.5rem 0;
`;

const InputBody = styled.div`
  padding: 1rem;
`;

const InputButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 1rem;
  svg {
    margin-right: 0.2rem;
  }
  button {
    display: inline-flex;
  }
  button + button {
    margin-left: 0.5rem;
  }
`;

const CommentInput = ({
  contents,
  updateContents,
  profileLink,
  isClosed,
  onCloseIssue,
  onReopenIssue,
  onSubmit,
}) => {
  return (
    <CommentInputContainer>
      <ProfileContainer className="pc-only">
        <UserProfile src={profileLink} />
      </ProfileContainer>
      <InputContainer>
        <InputHeader />
        <InputBody>
          <MarkdownEditor contents={contents} updateContents={updateContents} />
          <InputButtonGroup>
            {isClosed ? (
              <CustomButton handleClick={onReopenIssue}>
                Reopen issue
              </CustomButton>
            ) : (
              <CustomButton handleClick={onCloseIssue}>
                <ClosedIcon color="red" />
                Close issue
              </CustomButton>
            )}
            <CustomButton style={{ color: 'green' }} handleClick={onSubmit}>
              Comment
            </CustomButton>
          </InputButtonGroup>
        </InputBody>
      </InputContainer>
    </CommentInputContainer>
  );
};

export default CommentInput;
