import { createStore, combineReducers } from "redux";
import languageReducer from "../src/language/language.reducer";
import cartReducer from "../src/cart/cart.reducer";
import userReduer from "../src/user/user.reducer";

const appReducer = combineReducers({
  language: languageReducer,
  cart: cartReducer,
  user: userReduer,
});

const store = createStore(appReducer);

export default store;
