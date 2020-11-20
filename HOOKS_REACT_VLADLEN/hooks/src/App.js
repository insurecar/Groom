import React, { useState, useMemo, useEffect } from "react";

function complexCompute(num) {
  let i = 0;
  while (i < 1000000000) i++;
  return num * 2;
}

const App = () => {
  const [number, setNumber] = useState(42);
  const [colored, setColored] = useState(false);

  const styles = useMemo(
    () => ({
      color: colored ? "darkred" : "black",
    }),
    [colored]
  );

  useEffect(() => {
    console.log("styles changes");
  }, [styles]);

  const computed = useMemo(() => complexCompute(number), [number]); // кешує дані. Другим параметром як масив приймає то коли треба міняти дані

  return (
    <div className="box">
      <h3 style={styles}>Вираховуємо властивість {computed} </h3>
      <button className="btn btn-success" onClick={() => setNumber((prev) => prev + 1)}>
        Добавити
      </button>
      <button className="btn btn-danger" onClick={() => setNumber((prev) => prev - 1)}>
        Видалити
      </button>
      <button className="btn btn-warning" onClick={() => setColored((prev) => !prev)}>
        Змінити
      </button>
    </div>
  );
};

export default App;
