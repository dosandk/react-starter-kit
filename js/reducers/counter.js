import { INCREMENT_COUNTER, DECREMENT_COUNTER } from '../constants/counter';

export default {
  [INCREMENT_COUNTER]: (state = {}) => state + 1,
  [DECREMENT_COUNTER]: (state = {}) => state - 1
};
