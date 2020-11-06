import React from 'react';
import DropdownItemContainer from './DropdownItemContainer';
import * as Icon from '../Icon';

const TextDropdownItem = ({ content }) => {
  return (
    <DropdownItemContainer>
      <div className="dropdown-item ">
        <Icon.CheckIconComponent />
      </div>

      <div className="dropdown-item ">
        <span>{content}</span>
      </div>
    </DropdownItemContainer>
  );
};

export default TextDropdownItem;
