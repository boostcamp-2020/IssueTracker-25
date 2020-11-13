import React from 'react';
import DropdownItemContainer from './DropdownItemContainer';
import * as Icons from '../../icons';

const NopDropdownItem = ({ selected, value, onClick, title }) => {
  const key = 'no';
  return (
    <DropdownItemContainer onClick={() => onClick({ key, value })}>
      <div className="dropdown-item dropdown-item-check">
        {selected && <Icons.CheckIcon />}
      </div>

      <div className="dropdown-item ">
        <div>{title}</div>
      </div>
    </DropdownItemContainer>
  );
};

export default NopDropdownItem;
