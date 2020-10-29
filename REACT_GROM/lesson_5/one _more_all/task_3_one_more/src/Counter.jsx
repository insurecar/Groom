import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
    };

    this.decrement = this.decrement.bind(this);
  }
  decrement() {
    this.setState({
      counter: this.state.counter - 1, //ЦЕ ВТРАТА КОНТЕКСТУ І ВІН ПРИВЯЗУЄТЬСЯ  ВГОРІ
    });
  }

  increment = () => {
    this.setState({
      counter: this.state.counter + 1, //ТАКИМ МЕТОДОМ КОНТЕКСТ НЕ ВТРАЧАЄТЬСЯ
    });
  };

  reset() {
    this.setState({
      counter: 0, //ЦЕ ТРЕТІЙ СПОСІБ І ТАК САМО КОНТЕКСТ НЕ ВТРАЧАЄТЬСЯ
    });
  }

  render() {
    return (
      <div className="counter">
        <button className="counter__button" onClick={this.decrement}>
          -
        </button>
        <span className="counter__value" onClick={() => this.reset()}>
          {this.state.counter}
        </span>
        <button className="counter__button" onClick={this.increment}>
          +
        </button>
      </div>
    );
  }
}

export default Counter;
