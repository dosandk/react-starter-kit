import { combineReducers } from 'redux';
import counter from './counter';
import loader from './loader';
import { createReducers } from '../utils/createReducers';

const reducers = { counter, loader };
const rootReducer = combineReducers(createReducers(reducers));

export default rootReducer;
