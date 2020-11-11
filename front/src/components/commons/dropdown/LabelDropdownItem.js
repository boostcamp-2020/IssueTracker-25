import React from 'react';
import styled from 'styled-components';
import DropdownItemContainer from './DropdownItemContainer';
import * as Icons from '../../icons';
import color from '../../../libs/color';

const LabelDropdownItemContainer = styled(DropdownItemContainer)`
  height: 3rem;
  .dropwdown-item-circle {
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
  }
  .dropdown-item-content {
    flex-direction: column;
    justify-content: space-evenly;
    > div {
      text-indent: 0.5rem;
    }
    &__description {
      color: ${color.gray};
    }
  }
  .dropdown-item-top {
    height: 1.5rem;
  }
`;

const LabelDropdownItem = ({ selected, label, onClick }) => {
  const { id, name, description, color: labelColor } = label;
  return (
    <LabelDropdownItemContainer onClick={() => onClick(id)}>
      <div className="dropdown-item dropdown-item-check dropdown-item-top">
        {selected && <Icons.CheckIcon />}
      </div>

      <div className="dropdown-item dropdown-item-top">
        <div
          className="dropwdown-item-circle"
          style={{ backgroundColor: labelColor }}
        />
      </div>

      <div className="dropdown-item dropdown-item-content">
        <div>{name}</div>
        <div className="dropdown-item-content__description">{description}</div>
      </div>
    </LabelDropdownItemContainer>
  );
};

export default LabelDropdownItem;
