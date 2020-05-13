import React from "react";
import ReactDOM from "react-dom";
import NumberList from "./NumberList";
import Blog from "./Blog";
import "./index.scss";

const NUMBERS = [1, 2, 3, 4, 5];
const POSTS = [
  {
    id: 1,
    title: "Привет, мир",
    content: "Добро пожаловать в документацию React!",
  },
  { id: 2, title: "Установка", content: "React можно установить из npm." },
];
const rootElement = document.querySelector("#root");

ReactDOM.render(<Blog posts={POSTS} />, rootElement);
