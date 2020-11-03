import { store } from "./store";
import { addUser, deleteUser } from "./user.actions";

store.dispatch(addUser({ id: 32, name: "anna" }));
store.dispatch(addUser({ id: 31, name: "anna" }));
store.dispatch(deleteUser(32));
