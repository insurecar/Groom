import { createStore, bindActionCreators } from "redux";

const INCREMENT = "COUNTER/NCREMENT";
const DECREMENT = "COUNTER/DECREMENT";
const MULTIPLAY = "COUNTER/MULTIPLAY";

const incrementAction = () => ({ type: INCREMENT });

const dicrementAction = () => ({ type: DECREMENT });

const multiAction = () => ({ type: MULTIPLAY });

const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;
    case MULTIPLAY:
      return state * 2;
    default:
      return state;
  }
};

const store = createStore(counterReducer);

store.dispatch(incrementAction());
store.dispatch(incrementAction());
store.dispatch(incrementAction());
store.dispatch(dicrementAction());
store.dispatch(multiAction());

console.log(store.getState());

// import { createStore } from "redux";

// const incrementActionCreator = () => ({
//   type: "INCREMENT",
// });

// const decrementActionCreator = () => ({
//   type: "DECREMENT",
// });

// const counterReducer = (state = 0, action) => {
//   switch (action.type) {
//     case "INCREMENT":
//       return state + 1;
//     case "DECREMENT":
//       return state - 1;
//     default:
//       return state;
//   }
// };

// const store = createStore(counterReducer);

// store.dispatch(incrementActionCreator());
// store.dispatch(incrementActionCreator());
// store.dispatch(incrementActionCreator());
// store.dispatch(decrementActionCreator());
// store.dispatch(decrementActionCreator());

// console.log(store.getState());
