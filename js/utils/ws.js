import io from 'socket.io-client';

export {
  sendMessage,
  initConnection,
  addListener
};

let socket;
let listeners = {};

function initConnection(message) {
  if (!socket) {
    connect();
  }

  if (message) {
    send(message);
  }
}

function connect() {
  socket = io('http://front-camp-chat.herokuapp.com/');

  socket.on('message', onMessage);
  socket.on('join', onJoin);
  socket.on('leave', onLeave);
}

function onMessage(msg) {
  console.error('onMessage');
  fireListeners('message', msg);
}

function onJoin() {
  console.error('onJoin');
  fireListeners('join');
}

function onLeave() {
  console.error('onLeave');
  fireListeners('leave');
}

function send(message) {
  socket.emit('message', message);
}

function sendMessage(message) {
  initConnection(message);
}

function fireListeners(event, payload) {
  if (listeners[event]) {
    [...listeners[event]].forEach(listener => listener(payload));
  }
}

function addListener(event, listener) {
  if (!listeners[event]) {
    listeners[event] = [];
  }
  listeners[event].push(listener);
}
