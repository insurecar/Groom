import "./index.scss";
import { decrementCount, incrementCount, resetCount } from "./counter.actions";
import { addUser, deleteUser, updateUser } from "./users.actions";
import store from "./store";

const decr = document.querySelector('[data-action="decrement"]');
const incr = document.querySelector('[data-action="increment"]');
const res = document.querySelector(".counter__button:nth-child(2)");
const result = document.querySelector(".counter__result");

const onDecrement = () => {
  store.dispatch(decrementCount());
  console.log(store.getState());
};

const onIncrement = () => {
  store.dispatch(incrementCount());
  console.log(store.getState());
};

const onReset = () => {
  store.dispatch(resetCount());
  console.log(store.getState());
};

decr.addEventListener("click", onDecrement);
incr.addEventListener("click", onIncrement);
res.addEventListener("click", onReset);

store.subscribe(() => {
  result.textContent = store.getState().counter;
});

store.dispatch(addUser({ id: 31, name: "Rostyk" }));
store.dispatch(addUser({ id: 32, name: "Rostyk" }));
store.dispatch(addUser({ id: 33, name: "Rostyk" }));
store.dispatch(updateUser(32, { name: "OPER" }));
store.dispatch(deleteUser(31));

console.log(store.getState());
