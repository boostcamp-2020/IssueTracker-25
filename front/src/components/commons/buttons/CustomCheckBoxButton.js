import styled from 'styled-components';
import color from '../../../libs/color';

const CustomCheckBoxButton = styled.button`
  width: 1rem;
  height: 1rem;
  background-color: ${({ checked }) => (checked ? color.blue : color.white)};
`;

export default CustomCheckBoxButton;
