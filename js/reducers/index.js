import { combineReducers } from 'redux';
import counter from './counter';
import { createReducers } from '../utils/createReducers';
import { routerReducer } from 'react-router-redux';

const reducers = { counter };
const rootReducer = combineReducers(Object.assign({}, createReducers(reducers), { router: routerReducer }));

export default rootReducer;
