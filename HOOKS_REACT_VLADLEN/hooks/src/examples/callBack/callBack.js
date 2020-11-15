import React, { useState, useCallback } from "react";
import { ItemsList } from "./ItemsList";

const App = () => {
  const [colored, setColored] = useState(false);
  const [count, setCount] = useState(0);

  const styles = {
    color: colored ? "coral" : "black",
  };

  const generateItemsFromAPI = useCallback(() => {
    return new Array(count).fill("").map((_, i) => `Елемент ${i + 1}`);
  }, [count]);

  return (
    <div className="box">
      <h3 style={styles}>Вираховуємо властивість: {count} </h3>
      <button className="btn btn-success" onClick={() => setCount((prev) => prev + 1)}>
        Добавити
      </button>
      <button className="btn btn-danger" onClick={() => setCount((prev) => prev - 1)}>
        Видалити
      </button>
      <button className="btn btn-warning" onClick={() => setColored((prev) => !prev)}>
        Змінитти
      </button>
      <ItemsList getItems={generateItemsFromAPI} />
    </div>
  );
};

export default App;
