export const INCREMENT = "COUNTER/INCREMENT";
export const DECREMENT = "COUNTER/DEREMENT";
export const RESET = "COUNTER/RESET";

export const increment = () => {
  return {
    type: INCREMENT,
  };
};

export const decrement = () => {
  return {
    type: DECREMENT,
  };
};

export const reset = () => {
  return {
    type: RESET,
  };
};
