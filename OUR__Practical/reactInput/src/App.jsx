import React, { useState, useEffect } from "react";

const App = () => {
  const [inputData, setData] = useState("Hello");

  const handleChange = ({ target }) => {
    setData({
      inputData: target.value,
    });
    console.log(inputData);
  };

  const onHandleClick = () => {
    const input = document.querySelector(".qwerty");
    // input.innerHTML += inputData;
    setData({});
    console.log(inputData);
    input.innerHTML = inputData;
  };

  useEffect(() => {
    // onHandleClick(inputData);
    let btn = document.querySelector("button");
    btn.addEventListener("click", onHandleClick);

    // return () => btn.removeEventListener("click", onHandleClick);
  }, []);

  return (
    <div>
      <button>Push</button>
      <input type="text" onChange={handleChange} />
      <div className="qwerty"></div>
    </div>
  );
};
export default App;
