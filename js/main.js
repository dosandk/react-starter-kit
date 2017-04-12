import React from 'react';
import { render } from 'react-dom';
import configureStore from './store';
import Root from './containers/root';

import 'styles/_base.scss';

const store = configureStore();
const appContainer = document.getElementById('app');

const renderApp = () => {
  render(<Root store={ store }/>, appContainer);
};

renderApp();
