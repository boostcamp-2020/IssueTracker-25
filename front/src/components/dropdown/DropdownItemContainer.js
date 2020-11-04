import styled from 'styled-components';
import color from '../../libs/color';

const DropdownItemContainer = styled.div`
  display: flex;
  border-top: 1px solid ${color.lightGray};
  width: 18rem;
  padding: 0.2rem 1rem;
  &:hover {
    background: ${color.lightBlue};
  }
  > div {
    height: 1.5rem;
  }
  .dropdown-item {
    display: flex;
    align-items: center;
  }
  height: 1.5rem;
`;

export default DropdownItemContainer;
