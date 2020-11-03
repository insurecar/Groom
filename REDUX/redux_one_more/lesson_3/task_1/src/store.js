import { createStore, combineReducers } from "redux";
import { userReducer } from "./users.reducer";
import { counterReducer } from "./counter.reducer";

const appReducer = combineReducers({
  users: userReducer,
  counter: counterReducer,
});
const store = createStore(appReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
export default store;
