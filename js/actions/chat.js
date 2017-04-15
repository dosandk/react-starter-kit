import { SEND_MESSAGE, JOIN_CHAT, LEAVE_CHAT } from '../constants/chat';

export {
  sendMessage,
  joinChat,
  leaveChat
};

function sendMessage(message) {
  return {
    type: SEND_MESSAGE,
    payload: {
      message
    }
  };
}

function joinChat(username) {
  console.error('joinChat', username);
  return {
    type: JOIN_CHAT,
    payload: {
      username
    }
  };
}

function leaveChat(username) {
  console.error('leaveChat', username);
  return {
    type: LEAVE_CHAT,
    payload: {
      username
    }
  };
}
