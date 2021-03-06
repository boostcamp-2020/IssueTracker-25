import React from 'react';
import styled from 'styled-components';
import MarkdownEditor from '../../../../models/markdown-editor';
import CustomButton from '../../../commons/buttons/CustomButton';

const ButtonContainer = styled.div`
  display: flex;
  margin: 1rem 0;
  justify-content: flex-end;
`;
const IssueEditBody = ({
  newContents,
  onChange,
  onContentsSave,
  cancelContentsClickHandler,
}) => {
  return (
    <>
      <MarkdownEditor contents={newContents} updateContents={onChange} />
      <ButtonContainer>
        <CustomButton
          style={{ color: 'whiteRed' }}
          handleClick={cancelContentsClickHandler}
        >
          Cancel
        </CustomButton>
        <CustomButton style={{ color: 'green' }} handleClick={onContentsSave}>
          Update comment
        </CustomButton>
      </ButtonContainer>
    </>
  );
};

export default IssueEditBody;
