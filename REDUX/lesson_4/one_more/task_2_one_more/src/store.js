import counterReducer from "./counter/counter.reducer";
import countReducer from "./counter/count.reducer";
import { createStore, combineReducers } from "redux";
import usersReducer from "./users/users.reducer";

const appReducer = combineReducers({
  users: usersReducer,
  counter: counterReducer,
  co: countReducer,
});

const store = createStore(
  appReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
