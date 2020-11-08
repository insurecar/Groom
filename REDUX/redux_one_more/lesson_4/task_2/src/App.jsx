import React from "react";
import Users from "./users/Users";
import store from "./store";
import { Provider } from "react-redux";
// import Counter from "./counter/Counter";/

const App = () => {
  // store.dispatch(addUser({ id: 31, name: "ivan" }));
  // store.dispatch(addUser({ id: 32, name: "Zebra" }));
  // store.dispatch(addUser({ id: 33, name: "Vasia" }));
  // store.dispatch(updateUser(31, { name: "Petro" }));
  // store.dispatch(deleteUser(33));

  // console.table(store.getState().users.usersList);

  return (
    <Provider store={store}>
      <Users />
    </Provider>
  );
};
export default App;
