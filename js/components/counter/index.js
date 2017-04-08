import React from 'react';

const Counter = ({ increment, incrementIfOdd, decrement, counter }) => {
  return (
    <p>
      Clicked: {counter} times
      {' '}
      <button onClick={increment}>+</button>
      {' '}
      <button onClick={decrement}>-</button>
      {' '}
      <button onClick={incrementIfOdd}>Increment if odd</button>
    </p>
  );
};

export default Counter;
