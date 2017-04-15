import { SEND_MESSAGE } from '../constants/chat';

export {
  sendMessage
};

function sendMessage(message) {
  return {
    type: SEND_MESSAGE,
    payload: {
      message
    }
  };
}
