import React from "react";
import Counter from "./components/Counter";
import { Provider } from "react-redux";
import store from "./store";

const App = () => {
  console.log(store.getState());
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
};
export default App;
