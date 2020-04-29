import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import SearchField from "./Search.jsx";

const rootElement = document.querySelector("#root");

ReactDOM.render(<SearchField name="Bob" />, rootElement);
