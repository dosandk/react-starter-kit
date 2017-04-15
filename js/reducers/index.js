import { combineReducers } from 'redux';
import counter from './counter';
import loader from './loader';
import login from './login';
import chat from './chat';
import { createReducers } from '../utils/createReducers';
import { routerReducer } from 'react-router-redux';

const reducers = {
  counter,
  loader,
  user: login,
  messages: chat
};
const rootReducer = combineReducers(Object.assign({}, createReducers(reducers), { router: routerReducer }));

export default rootReducer;
