import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Counter from '../components/counter';
import * as CounterActions from '../actions/counter';

class CounterApp extends Component {
  render() {
    return (
      <Counter {...this.props} />
    );
  }
}

const mapStateToProps = ({ counter }) => ({ counter });
const mapActionsToProps = dispatch => bindActionCreators(CounterActions, dispatch);

export default connect(mapStateToProps, mapActionsToProps)(CounterApp);
