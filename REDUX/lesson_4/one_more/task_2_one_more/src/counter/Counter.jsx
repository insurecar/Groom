import React from "react";
import { connect } from "react-redux";
import { increment, decrement, reset } from "./counter.actions";

const Counter = ({ plus, incr, decr, rest }) => {
  console.log(plus);
  return (
    <div style={{ display: "flex", margin: "10px" }}>
      <button onClick={incr} style={{ padding: "10px" }}>
        +
      </button>
      <span onClick={rest}>{plus}</span>
      <button onClick={decr} style={{ padding: "10px" }}>
        -
      </button>
    </div>
  );
};

const mapState = (state) => {
  return {
    plus: state.co,
  };
};

const mapDispatch = {
  incr: increment, //store.dispatch(increment())
  decr: decrement,
  rest: reset,
};

export default connect(mapState, mapDispatch)(Counter);
