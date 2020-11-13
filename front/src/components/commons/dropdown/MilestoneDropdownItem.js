import React from 'react';
import DropdownItemContainer from './DropdownItemContainer';
import * as Icons from '../../icons';

const MilestoneDropdownItem = ({ selected, milestone, onClick }) => {
  const { id, title } = milestone;
  return (
    <DropdownItemContainer
      onClick={() => onClick({ key: 'milestone', value: title, id })}
    >
      <div className="dropdown-item dropdown-item-check">
        {selected && <Icons.CheckIcon />}
      </div>

      <div className="dropdown-item ">
        <div>{title}</div>
      </div>
    </DropdownItemContainer>
  );
};

export default MilestoneDropdownItem;
