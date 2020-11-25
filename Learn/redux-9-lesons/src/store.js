import { createStore } from "redux";
import { songReducer } from "./reducer/songReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  songs: songReducer,
});

export const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
