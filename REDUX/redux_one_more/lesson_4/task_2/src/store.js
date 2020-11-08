import { createStore, combineReducers } from "redux";
import counterReducer from "./counter/counter.reducer";
import userReducer from "./users/users.reducer";

const appReducer = combineReducers({
  counter: counterReducer,
  users: userReducer,
});

const store = createStore(appReducer);

export default store;
