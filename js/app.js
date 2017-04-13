import React from 'react';
import Index from './components/index';
import { Route } from 'react-router-dom';

const App = ({ children }) => (
  <Route>
    <Index />
    { children }
  </Route>
);

export default App;
