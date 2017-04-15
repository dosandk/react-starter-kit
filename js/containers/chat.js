import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Chat from '../components/chat';
import * as chatActions from '../actions/chat';

class ChatContainer extends Component {
  render() {
    return (
      <Chat {...this.props} />
    );
  }
}

const mapStateToProps = ({ messages }) => ({ messages });
const mapActionsToProps = dispatch => bindActionCreators(chatActions, dispatch);

export default connect(mapStateToProps, mapActionsToProps)(ChatContainer);
