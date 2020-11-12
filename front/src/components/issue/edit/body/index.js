import React from 'react';
import MarkdownEditor from '../../../../models/markdown-editor';
import CustomButton from '../../../commons/buttons/CustomButton';

const IssueEditBody = ({
  initialContents,
  onChange,
  onContentsSave,
  cancelContentsClickHandler,
}) => {
  return (
    <>
      <MarkdownEditor
        onChange={(value) => onChange(value)}
        initialContents={initialContents}
      />
      <CustomButton
        style={{ color: 'whiteRed' }}
        handleClick={cancelContentsClickHandler}
      >
        Cancel
      </CustomButton>
      <CustomButton style={{ color: 'green' }} handleClick={onContentsSave}>
        Update comment
      </CustomButton>
    </>
  );
};

export default IssueEditBody;
