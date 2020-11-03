import { DECREMENT_COUNTER, INCREMENT_COUNTER, RESET_COUNTER } from "./counter.actions";

const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case DECREMENT_COUNTER:
      return state - 1;
    case INCREMENT_COUNTER:
      return state + 1;
    case RESET_COUNTER:
      return (state = 0);
    default:
      return state;
  }
};

export { counterReducer };
