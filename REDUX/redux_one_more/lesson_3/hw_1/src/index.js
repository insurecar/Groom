import store from "./store";
import { setLanguage } from "./language/language.actions";
import { addProduct, removeProduct } from "../src/cart/cart.actions";
import { setUser, removeUser } from "./user/user.actions";

store.dispatch(addProduct({ id: 1, product: "table" }));
store.dispatch(addProduct({ id: 2, product: "book" }));
store.dispatch(addProduct({ id: 3, product: "mouse" }));
store.dispatch(removeProduct(2));
store.dispatch(setLanguage("ua"));
store.dispatch(setUser({ name: "Ivan" }));
store.dispatch(removeUser());

console.log(store.getState());
