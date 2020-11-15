import React, { useState, useEffect } from "react";

const ItemsList = ({ getItems }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const newItems = getItems();
    console.log("render");
    setItems(newItems);
  }, [getItems]);

  return (
    <ul>
      {items.map((elem) => (
        <li key={elem}>{elem}</li>
      ))}
    </ul>
  );
};

export { ItemsList };
