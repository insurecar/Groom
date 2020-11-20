import { INCREMENT_COUNTER, DECREMENT_COUNTER, GET_COUNTER } from "../actions/actions.js";

const initialState = {
  counter: 0,
};

export const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COUNTER:
      return {
        ...state,
        counter: action.payload,
      };
    case INCREMENT_COUNTER:
      return {
        ...state,
        counter: state.counter + action.payload,
      };
    case DECREMENT_COUNTER:
      return {
        ...state,
        counter: state.counter - action.payload,
      };
    default:
      return state;
  }
};
