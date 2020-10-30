import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import color from '../../libs/color';

const Button = styled.button`
  height: 2.5rem;
  margin: 0;
  border: transparent;
  background-color: white;
  text-align: center;
  &: hover {
    background-color: whitesmoke;
    cursor: pointer;
  }
`;
const Counter = styled.span`
  display: inline-block;
  padding: 3px 8px;
  border-radius: 32px;
  background-color: ${color.grey};
  text-align: center;
`;
const Icon = styled.img`
  width: 20px;
  height: 20px;
`;

const MovePageButton = (props) => {
  const { className, name } = props;
  // element의 개수를 count하는 api를 구현하고 연결해야할 거 같아서 일단 0으로 두었습니다.
  const count = 0;

  function move() {
    // page move event
  }

  return (
    <Button className={className} onClick={move}>
      <Icon src="https://img.icons8.com/material-outlined/100/000000/price-tag.png" />
      {name}
      <Counter>{count}</Counter>
    </Button>
  );
};

MovePageButton.propTypes = {
  className: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
export default MovePageButton;
