import React from 'react';
import { Route } from 'react-router';
import App from './app';
import Counter from './counter';
import TestComponent from '../components/test';

export default (
  <Route path='/' component={ App } >
    <Route path='test' component={ TestComponent } />
    <Route path='counter' component={ Counter } />
  </Route>
);
