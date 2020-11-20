import React, { useState, useMemo, useCallback, useEffect } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [colored, setColored] = useState(false);

  const styles = useMemo(
    () => ({
      color: colored ? "coral" : "red",
    }),
    [colored]
  );

  // const func = useCallback(
  //   (count) => {
  //     {
  //       console.log("count");
  //     }
  //   },
  //   [count]
  // );
  // func();

  const func = (val) => {
    console.log(val);
  };

  useMemo(() => {
    func(count);
  }, [colored]);

  // useEffect(() => {
  //   console.log("effect");
  // }, [count]);

  return (
    <div className="box">
      <h3 style={styles}>Вираховуємо властивість {count} </h3>
      <button className="btn btn-success m-3" onClick={() => setCount((prev) => prev + 1)}>
        Добавити
      </button>
      <button className="btn btn-danger m-3" onClick={() => setCount((prev) => prev - 1)}>
        Видалити
      </button>
      <button className="btn btn-warning m-3" onClick={() => setColored((prev) => !prev)}>
        Змінити
      </button>
    </div>
  );
}

export default App;
