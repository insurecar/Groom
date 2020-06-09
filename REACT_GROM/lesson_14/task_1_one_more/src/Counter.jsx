import React, { useState } from "react";

const Counter = () => {
  const [counter, setData] = useState("7");

  return (
    <div className="counter">
      <button className="counter__button" onClick={() => setData(counter - 1)}>
        -
      </button>
      <span className="counter__value">{counter}</span>
      <button
        className="counter__button"
        onClick={() => setData(parseInt(counter) + 1)}
      >
        +
      </button>
    </div>
  );
};

export default Counter;
