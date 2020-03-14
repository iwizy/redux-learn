import React, { Component } from 'react';
import * as Actions from './actions';
import { connect } from 'react-redux';
import './style.css';

class App extends Component {
  state = {
    count: 0
  };

  increment = (event) => {
    let {count} = this.state;
    this.setState({
      count: this.state.count + 1
    })
  };

  decrement = (event) => {
    let {count} = this.state;
    this.setState({
      count: this.state.count - 1
    })
  };

  render() {
    return (
      <div>
        <div>{this.state.count}</div>
        <div>
          <button onClick={this.increment}>Increment</button>
          <button onClick={this.decrement}>Decrement</button>
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
