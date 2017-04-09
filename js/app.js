import React from 'react';
import Index from './components/index';

const App = ({ children }) => (
  <div>
    <Index />
    { children }
  </div>
);

export default App;
