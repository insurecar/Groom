import React, { Component } from "react";

import Auxiliary from "../hoc/Auxiliary";

class Counter extends Component {
  state = {
    counter: 0,
  };

  addCounter = () => {
    // this.setState({
    //   counter: this.state.counter + 1,
    // });

    this.setState((prevState) => {
      return {
        counter: prevState.counter + 1,
      };
    });
  };

  render() {
    return (
      <Auxiliary>
        <h2>Counter {this.state.counter}</h2>
        <button onClick={this.addCounter}>+</button>
        <button
          onClick={() => this.setState({ counter: this.state.counter - 1 })}
        >
          -
        </button>
      </Auxiliary>
    );

    // return [
    //   <h2 key={Math.random()}>Counter {this.state.counter}</h2>,
    //   <button key={Math.random()} onClick={this.addCounter}>
    //     +
    //   </button>,
    //   <button
    //     key={Math.random()}
    //     onClick={() => this.setState({ counter: this.state.counter - 1 })}
    //   >
    //     -
    //   </button>,
    // ];
  }
}

export default Counter;
