import { SEND_MESSAGE } from '../constants/chat';

export default {
  [SEND_MESSAGE]: (state, { payload }) => {
    return [...state, payload.message];
  }
};
