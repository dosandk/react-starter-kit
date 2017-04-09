import React from 'react';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import Routes from './routes';

const Root = ({ store }) => (
  <Provider store={ store }>
    <Router history={ browserHistory } routes={ Routes } />
  </Provider>
);

export default Root;
