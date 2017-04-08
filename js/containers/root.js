import React from 'react';
import { Provider } from 'react-redux';
import Counter from './counter';

const Root = ({ store }) => {
  return (
    <Provider store={ store }>
      <Counter />
    </Provider>
  );
};

export default Root;
