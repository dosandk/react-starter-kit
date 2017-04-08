import { combineReducers } from 'redux';
import counter from './counter';
import { createReducers } from '../utils/createReducers';

const reducers = { counter };
const rootReducer = combineReducers(createReducers(reducers));

export default rootReducer;
