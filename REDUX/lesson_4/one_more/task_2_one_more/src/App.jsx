import React, { Component } from "react";
import Users from "./users/Users";
import { Provider } from "react-redux";
import store from "./store";
import { increment } from "./counter/counter.actions";
import { addUser } from "./users/users.actions";
import Counter from "./counter/Counter";

class App extends Component {
  render() {
    // store.dispatch(increment()).counter;
    // console.log(store.getState().counter);

    // store.dispatch(addUser({ name: "vasia", age: 18, id: 18 })).users;

    // console.log(store.getState().users.usersList);

    return (
      <Provider store={store}>
        <Users />
        <Counter />
      </Provider>
    );
  }
}
export default App;
