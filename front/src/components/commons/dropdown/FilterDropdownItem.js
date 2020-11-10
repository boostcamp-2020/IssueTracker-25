import React from 'react';
import DropdownItemContainer from './DropdownItemContainer';

const FilterDropdownItem = ({ content, onClick }) => {
  return (
    <DropdownItemContainer onClick={onClick}>
      <div className="dropdown-item ">
        <span>{content}</span>
      </div>
    </DropdownItemContainer>
  );
};

export default FilterDropdownItem;
