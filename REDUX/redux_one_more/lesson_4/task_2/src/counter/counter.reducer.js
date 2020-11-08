import * as counterAction from "./counter.actions";

const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case counterAction.INCREMENT:
      return state + 1;
    case counterAction.DECREMENT:
      return state - 1;
    case counterAction.RESET:
      return 0;
    default:
      return state;
  }
};

export default counterReducer;
