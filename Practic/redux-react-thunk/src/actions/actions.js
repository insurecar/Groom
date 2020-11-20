import axios from "axios";

export const INCREMENT_COUNTER = "COUNTER/INCREMENT_COUNTER";
export const DECREMENT_COUNTER = "COUNTER/DECREMENT_COUNTER";
export const GET_COUNTER = "COUNTER/GET_COUNTER";

export const addCount = () => {
  return {
    type: INCREMENT_COUNTER,
    payload: 1,
  };
};

export const delCount = () => {
  return {
    type: DECREMENT_COUNTER,
    payload: 1,
  };
};

export const getCounter = (data) => {
  return {
    type: GET_COUNTER,
    payload: data,
  };
};

export const incrementCount = (num) => {
  return (dispatch) => {
    axios.post("https://5f7c2bda00bd74001690a560.mockapi.io/counter", dispatch(addCount()));
  };
};

export const decrementCount = () => {
  return fetch("https://5f7c2bda00bd74001690a560.mockapi.io/counter", {
    method: "POST",
    headers: {
      "Content-type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(),
  });
};
