import React, { useState } from "react";

function computeInitialCounter() {
  console.log("Some calculations...");
  return Math.trunc(Math.random() * 20);
}

const App = () => {
  const [counter, setCounter] = useState(() => computeInitialCounter());
  const [state, setState] = useState({
    title: "Лічильник",
    date: "159",
  });

  const increment = () => {
    setCounter((prevState) => {
      return prevState + 1;
    });
    setCounter((prev) => prev + 1);
    setCounter((prev) => prev + 1);
  };

  function updateTtle() {
    // setState({ ...state, title: "Нова назва" });
    setState((prev) => ({ ...prev, title: "New" }));
  }

  return (
    <div className="box">
      <h1>Лічильник: {counter}</h1>
      <button onClick={increment} className="btn btn-success">
        Добавити
      </button>
      <button onClick={() => setCounter(counter - 1)} className="btn btn-danger">
        Забрати
      </button>
      <button onClick={updateTtle} className="btn btn-default">
        Змінити назву
      </button>
      <pre>{JSON.stringify(state, null, 2)}</pre>
    </div>
  );
};

export default App;
