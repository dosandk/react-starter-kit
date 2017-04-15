import { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as ws from '../utils/ws';
import * as chatActions from '../actions/chat';

class Websockets extends Component {
  componentWillReceiveProps({ user }) {
    if (user && user.username) {
      const { sendMessage, joinChat, leaveChat } = this.props;

      ws.initConnection();
      ws.addListener('message', sendMessage);
      ws.addListener('join', joinChat);
      ws.addListener('leave', leaveChat);
    }
  }
  componentWillUnmount() {
    // TODO: add event for closing socket
  }
  shouldComponentUpdate() {
    return false;
  }
  render() {
    return null;
  }
}

const mapStateToProps = ({ user }) => ({ user });
const mapActionsToProps = dispatch => bindActionCreators(chatActions, dispatch);

export default connect(mapStateToProps, mapActionsToProps)(Websockets);
