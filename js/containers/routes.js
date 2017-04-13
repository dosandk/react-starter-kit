import React from 'react';
import { Route, Switch } from 'react-router-dom';
import App from '../app';
import Counter from './counter';
import TestComponent from '../components/test';

const Routes = () => {
  return (
    <div>
      <Route component={ App } />
      <Switch>
        <Route path='/test' component={ TestComponent } />
        <Route path='/counter' component={ Counter } />
      </Switch>
    </div>
  );
};

export default Routes;
