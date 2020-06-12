import { createStore } from "redux";

const incrementAction = {
  type: "INCREMENT",
};
dfvjhnsvhtrbrtjbrwtoji;
const decrementAction = {
  type: "DECREMENT",
};

const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
};

const store = createStore(counterReducer);

console.log(store.getState());
