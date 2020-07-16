import { createStore } from "redux";
import userReducer from "./users.reducers";

const store = createStore(userReducer);

export default store;
