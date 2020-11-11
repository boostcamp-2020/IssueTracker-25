import React from 'react';
import DropdownItemContainer from './DropdownItemContainer';

const FilterDropdownItem = ({ content, onClick }) => {
  return (
    <DropdownItemContainer onClick={onClick}>
      <div className="dropdown-item">{content}</div>
    </DropdownItemContainer>
  );
};

export default FilterDropdownItem;
