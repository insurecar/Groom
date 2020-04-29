import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import Search from "./Search.jsx";

const rootElement = document.querySelector("#root");

ReactDOM.render(<Search name="Bob" age={17} />, rootElement);
