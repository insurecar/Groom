import React from "react";
import ReactDOM from "react-dom";
import Greeting from "./Greeting.jsx";
import "./index.scss";
const rootElem = document.querySelector("#root");
const GreetingUser = () => {
  return (
    <Greeting
      firstName="Rostyslav"
      lastName="Shyian"
      birthDate={new Date("1986-11-02T10:09:03.819Z")}
    />
  );
};

ReactDOM.render(<GreetingUser />, rootElem);
