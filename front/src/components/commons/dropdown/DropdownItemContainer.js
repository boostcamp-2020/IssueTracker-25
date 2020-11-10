import styled from 'styled-components';
import color from '../../../libs/color';

const DropdownItemContainer = styled.button`
  display: flex;
  border: none;
  border-top: 1px solid ${color.lightGray};
  padding: 0.2rem 1rem;
  width: 18rem;
  height: 3rem;
  background: transparent;
  &:hover {
    background: ${color.lightBlue};
    cursor: pointer;
  }
  .dropdown-item-check {
    width: 1.5rem;
  }
  .dropdown-item {
    display: flex;
    align-items: center;
  }
  span {
    text-indent: 0.4rem;
  }
`;

export default DropdownItemContainer;
