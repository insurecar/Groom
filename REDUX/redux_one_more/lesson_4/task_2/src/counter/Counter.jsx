import React from "react";
import { increment, decrement, reset } from "./counter.actions";
import { connect } from "react-redux";

const Counter = ({ state, increment, decrement, reset }) => {
  return (
    <div className="counter">
      <button className="counter__button" onClick={decrement}>
        -
      </button>
      <span className="counter__value" onClick={reset}>
        {state}
      </span>
      <button className="counter__button" onClick={increment}>
        +
      </button>
    </div>
  );
};

const mapState = (state) => {
  return {
    state: state.counter,
  };
};

const mapDispatch = {
  increment,
  decrement,
  reset,
};

export default connect(mapState, mapDispatch)(Counter);
