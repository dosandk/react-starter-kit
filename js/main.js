import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import configureStore from './store';
import Root from './containers/root';

import 'styles/_base.scss';

const store = configureStore();
const appContainer = document.getElementById('app');

const renderWrapper = () => {
  render(
    <AppContainer>
      <Root store={ store }/>
    </AppContainer>,
    appContainer
  );
};

renderWrapper();

if (module.hot) {
  module.hot.accept('./containers/root.js', renderWrapper);
}
