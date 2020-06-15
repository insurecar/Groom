import store from "./store";
import { setLanguage } from "./language.actions";
import { addProduct, removeProduct } from "./cart.actions";
import { setUser, removeUser } from "./user.actions";

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(setLanguage("ua"));
store.dispatch(addProduct({ id: 1, name: "phone" }));
store.dispatch(addProduct({ id: 2, name: "laptop" }));
store.dispatch(removeProduct(2));
store.dispatch(setUser({ name: "Bo" }));
store.dispatch(removeUser());
