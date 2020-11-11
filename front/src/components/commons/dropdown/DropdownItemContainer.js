import styled from 'styled-components';
import color from '../../../libs/color';

const DropdownItemContainer = styled.button`
  display: flex;
  border: none;
  padding: 0.3rem 0.5rem;
  width: 100%;
  background: transparent;
  cursor: pointer;
  & + & {
    border-top: 1px solid ${color.lightGray};
  }
  &:hover {
    background: ${color.lightBlue};
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
