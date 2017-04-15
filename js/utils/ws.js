import io from 'socket.io-client';

export {
  sendMessge,
  initConnection
};

let socket;

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

  socket.on('message', msg => {
    console.error('message', msg);
  });

  socket.on('join', () => {
    console.error('join');
  });

  socket.on('leave', () => {
    console.error('leave');
  });
}

function send(message) {
  socket.emit('message', message);
}

function sendMessge(message) {
  initConnection(message);
}


