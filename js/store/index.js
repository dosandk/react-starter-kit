import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rootReducer from '../reducers';

const middleware = process.env.NODE_ENV === 'production' ? [thunk] : [thunk, createLogger()];
const enhancer = compose(applyMiddleware(...middleware));

export default function configureStore(initialState) {
  return createStore(rootReducer, initialState, enhancer);
}
