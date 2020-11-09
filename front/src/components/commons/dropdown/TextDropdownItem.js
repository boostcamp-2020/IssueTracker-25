import React from 'react';
import DropdownItemContainer from './DropdownItemContainer';
import * as Icons from '../../icons';

const TextDropdownItem = ({ content }) => {
  return (
    <DropdownItemContainer>
      <div className="dropdown-item ">
        <Icons.CheckIcon />
      </div>

      <div className="dropdown-item ">
        <span>{content}</span>
      </div>
    </DropdownItemContainer>
  );
};

export default TextDropdownItem;
