import React, { Component } from 'react';
import * as Actions from './actions';
import { connect } from 'react-redux';
import './style.css';

class App extends Component {
  render() {
    return (
      <div>
        <div>{this.props.counter}</div>
        <div>
          <button onClick={() => this.props.increaseAction(1)}>Increment</button>
          <button onClick={() => this.props.decreaseAction(1)}>Decrement</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return ({
    counter: state.applicationReducer.counter
  });
};

export default connect(mapStateToProps, Actions)(App);
