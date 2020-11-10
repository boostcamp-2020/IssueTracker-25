import React from 'react';
import styled from 'styled-components';
import color from '../../../libs/color';

const fileAccepts = [
  '.gif',
  '.jpeg',
  '.jpg',
  '.png',
  '.docx',
  '.gz',
  '.log',
  '.pdf',
  '.pptx',
  '.txt',
  '.xlsx',
  '.zip',
];

const UploadInputContainer = styled.div`
  background: inherit;
`;

const Label = styled.label`
  position: relative;
  display: block;
  width: 100%;
  padding: 0.5rem 0.6rem;
  color: ${color.gray};
`;

const Input = styled.input`
  width: calc(100% - 1.2rem);
  min-height: 0;
  opacity: 0.01;
  position: absolute;
  top: 0.5rem;
  left: 0.6rem;
  cursor: pointer;
`;

const UploadInput = () => {
  return (
    <UploadInputContainer>
      <Label htmlFor="input-upload">
        <Input name="input-upload" accept={fileAccepts.join(',')} type="file" />
        <span>Attach files by selecting here</span>
      </Label>
    </UploadInputContainer>
  );
};

export default UploadInput;
