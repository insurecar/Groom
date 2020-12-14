import { createStore } from "redux";
import { songReducer } from "./reducer/songReducer";
import { combineReducers } from "redux";
import { playListReducer } from "./reducer/playListReducer";

const rootReducer = combineReducers({
  songReducer,
  playListReducer,
});

export const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

console.log(store.getState());
