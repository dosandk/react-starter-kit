import { Component } from 'react';
import { connect } from 'react-redux';

class Websockets extends Component {
  constructor(...args) {
    super(...args);

    this.connection = new WebSocket('ws://front-camp-chat.herokuapp.com/');
  }
  componentDidMount() {
    this.connection.onmessage = this.addMessage;
    this.connection.onerror = this.onError;
  }
  onError() {
    console.error('onError');
  }
  addMessage() {
    console.error('addMessage');
  }
  componentWillUnmount() {
    if (this.connection) {
      this.connection = null;
    }
  }
  shouldComponentUpdate() {
    return false;
  }
  render() {
    return null;
  }
}

const mapStateToProps = ({ messages }) => ({ messages });

export default connect(mapStateToProps)(Websockets);
