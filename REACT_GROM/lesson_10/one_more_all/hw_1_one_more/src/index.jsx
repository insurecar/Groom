import React from "react";
import ReactDOM from "react-dom";
import BoilingVerdict from "./BoilingVerdict";
import Calculator from "./Calculator";
import "./index.scss";

const rootElement = document.querySelector("#root");

ReactDOM.render(<Calculator />, rootElement);
