import styled from 'styled-components';
import color from '../../libs/color';

const ArrowContainerStyle = styled.div`
  position: relative;

  @media (min-width: 768px) {
    &::before {
      width: 0.8rem;
      height: 0.8rem;
      content: '';
      background: inherit;
      position: absolute;
      transform: rotate(45deg);
      left: -7px;
      top: 14px;
      border-left: 1px solid ${color.lightGray};
      border-bottom: 1px solid ${color.lightGray};
    }
  }
`;

export default ArrowContainerStyle;
