import React, { useState, useEffect, useRef } from "react";

const App = () => {
  // const [renderCount, setRenderCount] = useState(1);
  const [value, setValue] = useState("initial");
  const renderCount = useRef(1); //створює  обєкт
  const inputRef = useRef(null); // використовуємо для фокусування
  const prevValue = useRef("");

  useEffect(() => {
    renderCount.current++;
    console.log(inputRef);
  });

  useEffect(() => {
    prevValue.current = value;
  }, [value]);

  const focus = () => inputRef.current.focus();

  return (
    <div className="box">
      <h1>Кількість рендерів: {renderCount.current}</h1>
      <h2>Попередній стан: {prevValue.current}</h2>
      <input ref={inputRef} type="text" onChange={(e) => setValue(e.target.value)} value={value} />
      <button className="btn btn-success" onClick={focus}>
        Фокус
      </button>
    </div>
  );
};

export default App;
