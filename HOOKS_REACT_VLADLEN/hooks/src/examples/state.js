import React, { useState } from "react";

function computedInitialCounter() {
  console.log("Some calculation...");
  return Math.trunc(Math.random() * 20);
}

function App() {
  const [counter, setCounter] = useState(() => computedInitialCounter());

  const [state, setState] = useState({
    title: "Лічильник",
    date: Date.now(),
  });

  const increment = () => {
    // setCounter(counter + 1);
    // setCounter(counter + 1);

    setCounter((prevCounter) => {
      return prevCounter + 1;
    });

    setCounter((prev) => prev + 1);
  };

  const decrement = () => {
    setCounter(counter - 1);
  };

  const updateTitle = () => {
    setState((prev) => ({
      ...prev,
      title: "Нова назва",
    }));
  };

  return (
    <div>
      <h1>Лічильник: {counter}</h1>
      <button onClick={increment} className="btn btn-success">
        Добавити
      </button>
      <button onClick={decrement} className="btn btn-danger">
        Видалити
      </button>

      <button onClick={updateTitle} className="btn btn-default">
        Змініти назву
      </button>

      <pre>{JSON.stringify(state, null, 2)}</pre>
    </div>
  );
}
export default App;
