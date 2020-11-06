import React from "react";
import { connect } from "react-redux";
import { increment, decrement, reset } from "../counter.actions";

const Counter = ({ counter, incr, decr, res }) => {
  return (
    <div className="counter">
      <button className="counter__button" onClick={decr}>
        -
      </button>
      <span className="counter__value" onClick={res}>
        {counter}
      </span>
      <button className="counter__button" onClick={incr}>
        +
      </button>
    </div>
  );
};

const mapState = (state) => {
  return {
    counter: state,
  };
};

const mapDispatch = {
  incr: increment,
  decr: decrement,
  res: reset,
};

export default connect(mapState, mapDispatch)(Counter);
