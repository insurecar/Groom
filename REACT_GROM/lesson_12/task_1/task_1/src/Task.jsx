import React from "react";
import className from "classnames";

const Task = ({ id, done, text, onChange }) => {
  return (
    <li className={className("list-item", { "list-item_done": done })}>
      <input
        type="checkbox"
        defaultChecked={done}
        className="list-item__checkbox"
        onChange={() => onChange(id)}
      />
      <span className="list-item__text">{text}</span>
      <button className="list-item__delete-btn"></button>
    </li>
  );
};

export default Task;
