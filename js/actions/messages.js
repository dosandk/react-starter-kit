import { ADD_MESSAGE } from '../constants/messages';

export {
  addMessage
};

function addMessage(message) {
  return {
    type: ADD_MESSAGE,
    payload: {
      message
    }
  };
}
