import { Component } from 'react';
import { connect } from 'react-redux';
import { sendMessge, initConnection } from '../utils/ws';

class Websockets extends Component {
  componentWillReceiveProps({ user }) {
    if (user && user.username) {
      initConnection();
      sendMessge('ribaaaaa');
    }
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

const mapStateToProps = ({ user }) => ({ user });

export default connect(mapStateToProps)(Websockets);
