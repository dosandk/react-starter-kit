import React from 'react';
import { render } from 'react-dom';
import { TestComponent } from './components/test';
import { AppContainer } from 'react-hot-loader';

import 'styles/_base.scss';

const appContainer = document.getElementById('app');

const renderWrapper = Component => {
  render(
    <AppContainer>
      <Component/>
    </AppContainer>,
    appContainer
  );
};

renderWrapper(TestComponent);

if (module.hot) {
  module.hot.accept('./components/test', () => {
    renderWrapper(TestComponent);
  });
}
