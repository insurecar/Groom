import React, { useState, useEffect } from "react";
import axios from "axios";

const App = () => {
  const [state, setState] = useState({});

  useEffect(() => {
    axios.get("https://5f7c2bda00bd74001690a560.mockapi.io/counter/1").then((response) => {
      setState(response.data);
    });
    console.log("useEffect loger");
  }, [state.number]);

  const handleNumber = () => {
    axios
      .put("https://5f7c2bda00bd74001690a560.mockapi.io/counter/1", { ...state, number: state.number + 1 })
      .then((response) => setState(response.data));
    console.log("handle axios");
  };

  const { number, id } = state; // тут два примітива, тобто два числа
  return (
    <div className="container">
      <h3>
        Число: {number} {id}
      </h3>
      <button className="btn btn-success m-3" onClick={() => handleNumber()}>
        Add
      </button>
    </div>
  );
};

export default App;
