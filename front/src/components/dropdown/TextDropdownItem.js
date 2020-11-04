import React from 'react';
import DropdownItemContainer from './DropdownItemContainer';
import CheckIconComponent from '../CheckIconComponent';

const TextDropdownItem = ({ content }) => {
  return (
    <DropdownItemContainer>
      <div className="dropdown-item ">
        <CheckIconComponent />
      </div>

      <div className="dropdown-item ">
        <span>{content}</span>
      </div>
    </DropdownItemContainer>
  );
};

export default TextDropdownItem;
