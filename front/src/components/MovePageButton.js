import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Button = styled.button`
  background-color: white;
  margin: 0;
  height: 2.5rem;
  text-align: center;
  border: transparent;
  &: hover {
    background-color: whitesmoke;
    cursor: pointer;
  }
`;
const Counter = styled.span`
  display: inline-block;
  text-align: center;
  background-color: #e4e7ea;
  border-radius: 32px;
  padding: 3px 8px;
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
