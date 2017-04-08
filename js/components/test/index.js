import React from 'react';

import styles from './test.scss';

export const TestComponent = () => {
  return <div className={ styles['test-class'] }>
    Test component
  </div>;
};
