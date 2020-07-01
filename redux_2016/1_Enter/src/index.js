import { createStore } from "redux";
import "./index.scss";

const ADD_TRACK = "ADD_TRACK";
const store = createStore(playlist);

function playlist(store = [], action) {
  switch (action.type) {
    case ADD_TRACK:
      return [...store, action.payload];
    default:
      return store;
  }
}

store.dispatch({
  type: "ADD_TRACK",
  payload: "Smell like ten spirit",
});
store.dispatch({
  type: "ADD_TRACK",
  payload: "Tommorow land",
});
store.dispatch({
  type: "ADD_TRACK",
  payload: "Enter Sadmen",
});

console.log(store.getState());
