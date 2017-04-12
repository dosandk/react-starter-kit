import React from 'react';
import Index from '../components/index';
import LoaderContainer from './loader';
import Websockets from './websockets';

const App = ({ children }) => (
  <div>
    <Index />
    { children }
    <LoaderContainer />
    <Websockets />
  </div>
);

export default App;
