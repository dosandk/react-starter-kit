import React from 'react';

const Chat = ({ messages }) => {
  const Messages = messages.map(item => {
    return <li>{ item }</li>;
  });

  return (
    <div>
      <form id="form">
        <div>
          <textarea></textarea>
        </div>
        <div>
          <input type="submit"/>
        </div>
      </form>
      <ul id="chat">
        { Messages || ''}
      </ul>
    </div>
  );
};

export default Chat;
