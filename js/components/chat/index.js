import React, { Component } from 'react';
import * as ws from '../../utils/ws';

class Chat extends Component {
  constructor(...args) {
    super(...args);

    this.state = {
      message: ''
    };
    this.submitMessage = this.submitMessage.bind(this);
    this.changeTextarea = this.changeTextarea.bind(this);
  }
  changeTextarea(event) {
    const { value: message } = event.target;

    this.setState({ message });
  }
  submitMessage(e) {
    e.preventDefault();
    ws.sendMessage(this.state.message);
    this.clearForm();
  }
  clearForm() {
    this.setState({ message: '' });
  }
  get messages() {
    const { messages } = this.props;

    return messages.map((item, index) => <li key={ index }>{ item }</li>) || '';
  }
  render() {
    return (
      <div>
        <form onSubmit={ this.submitMessage }>
          <div>
            <textarea value={ this.state.message } onChange={ this.changeTextarea } />
          </div>
          <div>
            <input type="submit"/>
          </div>
        </form>
        <ul id="chat">
          { this.messages }
        </ul>
      </div>
    );
  }
}

export default Chat;
