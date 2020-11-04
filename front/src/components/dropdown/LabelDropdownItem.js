import React from 'react';
import styled from 'styled-components';
import DropdownItemContainer from './DropdownItemContainer';
import { Check } from './UserDropdownItem';
import color from '../../libs/color';

const LabelDropdownItemContainer = styled(DropdownItemContainer)`
  height: 3rem;
  .dropwdown-item-circle {
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 50%;
  }
  .dropdown-item-content {
    flex-direction: column;
    justify-content: space-evenly;
    > div {
      text-indent: 0.5rem;
    }
    &__test {
      color: ${color.lightGray};
    }
  }
`;

const LabelDropdownItem = ({ data }) => {
  const { isCheck, name, dec, color: labelColor } = data;
  return (
    <LabelDropdownItemContainer>
      <div className="dropdown-item dropdown-item-check">
        {isCheck && <Check />}
      </div>

      <div className="dropdown-item ">
        <div
          className="dropwdown-item-circle"
          style={{ backgroundColor: labelColor }}
        />
      </div>

      <div className="dropdown-item dropdown-item-content">
        <div>{name}</div>
        <div className="dropdown-item-content__test">{dec}</div>
      </div>
    </LabelDropdownItemContainer>
  );
};

export default LabelDropdownItem;
