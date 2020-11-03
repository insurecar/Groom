import "./index.scss";
import store, { increment, decrement, reset } from "./store";

const resultElem = document.querySelector(".counter__result");
const incrementBtn = document.querySelector('[data-action="increment"]');
const resetBtn = document.querySelector('[data-action="reset"]');
const decrementBtn = document.querySelector('[data-action="decrement"]');

const onIncrement = () => {
  store.dispatch(increment());
  console.log(store.getState());
};

const onDecrement = () => {
  store.dispatch(decrement());
  console.log(store.getState());
};

const onReset = () => {
  store.dispatch(reset());
  console.log(store.getState());
};

store.subscribe(() => {
  const state = store.getState();
  const historyString = state.history.join(" ");
  const currentValue = state.history.reduce((acc, elem) => acc + +elem, 0);
  resultElem.textContent = state.history.length === 0 ? "0" : `${historyString} = ${currentValue}`;
});

incrementBtn.addEventListener("click", onIncrement);
decrementBtn.addEventListener("click", onDecrement);
resetBtn.addEventListener("click", onReset);

console.log(store.getState());
