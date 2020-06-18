import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import { createStore } from "redux";

const rootElement = document.querySelector("#root");

const initialState = ["Smells like ten spirit", "Enter Sandman"];

function playlist(state = initialState, action) {
  switch (action.type) {
    case "ADD_TRACK":
      return [...state, action.payload];
    default:
      return state;
  }
}

const store = createStore(playlist);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);

// import { createStore } from "redux";
// import "./index.scss";

// function playlist(state = [], action) {
//   if (action.type === "ADD_TRACK") {
//     return [...state, action.payload];
//   }
//   return state;
// }

// const store = createStore(playlist);

// const addTrackBtn = document.querySelectorAll(".addTrack")[0];
// const trackInput = document.querySelectorAll(".trackInput")[0];
// const list = document.querySelectorAll(".list")[0];

// store.subscribe(() => {
//   list.innerHTML = "";
//   trackInput.value = "";
//   store.getState().forEach((track) => {
//     const li = document.createElement("li");
//     li.textContent = track;
//     list.appendChild(li);
//   });
// });

// addTrackBtn.addEventListener("click", () => {
//   const trackName = trackInput.value;
//   store.dispatch({ type: "ADD_TRACK", payload: trackName });
// });
