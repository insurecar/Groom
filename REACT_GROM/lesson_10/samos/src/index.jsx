import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";

const rootElement = document.querySelector("#root");
ReactDOM.render(
  <div>
    <App userName="insurecar" />
  </div>,
  rootElement
);
