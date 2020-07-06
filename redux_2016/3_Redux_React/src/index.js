import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import { createStore } from "redux";

const initialState = ["Smels like spirit", "Enter Sadmen"];

const playlist = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TRACK":
      return [...state, action.payload];
    default:
      return state;
  }
};

const store = createStore(playlist);

const rootElement = document.querySelector("#root");

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
