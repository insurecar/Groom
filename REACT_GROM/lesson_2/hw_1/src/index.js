import "./list.css";
import React from "react";
import ReactDOM from "react-dom";

const rootElement = document.querySelector("#root");

const createElement = (
  <>
    <h1 className="title">Todo List</h1>
    <main className="todo-list">
      <div className="actions">
        <input className="task-input" type="text" />
        <button className="btn create-task-btn">Create</button>
      </div>
      <ul class="list"></ul>
    </main>
  </>
);
ReactDOM.render(createElement, rootElement);
