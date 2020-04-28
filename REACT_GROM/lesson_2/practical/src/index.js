import React from "react";
import ReactDOM from "react-dom";
import "./index.js";

const rootElement = document.querySelector("#root");

const element = (
  <>
    <h1>Search form</h1>
    <div>
      <input type="text" />
      <button>Submit</button>
    </div>
  </>
);

ReactDOM.render(element, rootElement);
