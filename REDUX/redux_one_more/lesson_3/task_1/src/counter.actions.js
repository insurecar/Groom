const DECREMENT_COUNTER = "COUNTER/DECREMENT_COUNTER";
const INCREMENT_COUNTER = "COUNTER/INCREMENT_COUNTER";
const RESET_COUNTER = "COUNTER/RESET_COUNTER";

const decrementCount = () => {
  return {
    type: DECREMENT_COUNTER,
  };
};

const incrementCount = () => {
  return {
    type: INCREMENT_COUNTER,
  };
};

const resetCount = () => {
  return {
    type: RESET_COUNTER,
  };
};

export { DECREMENT_COUNTER, INCREMENT_COUNTER, RESET_COUNTER, decrementCount, incrementCount, resetCount };
