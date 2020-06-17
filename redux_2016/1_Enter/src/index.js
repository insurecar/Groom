import { createStore } from "redux";

const playlist = (state = [], action) => {
  switch (action.type) {
    case "ADD_TRACK":
      return [...state, action.payload];
    default:
      return state;
  }
};

const store = createStore(playlist);

console.log(store);

store.subscribe(() => {
  console.log("subscribe", store.getState());
});

store.dispatch({
  type: "ADD_TRACK",
  payload: "Smels like spirit",
});

store.dispatch({
  type: "ADD_TRACK",
  payload: "Enter Sadman",
});

// import { createStore } from "redux";

// const playlist = (state = [], action) => {
//   switch (action.type) {
//     case "ADD_TRACK":
//       return [...state, action.payload];
//     default:
//       return state;
//   }
// };

// const store = createStore(playlist);

// store.subscribe(() => {
//   console.log("subscribe ", store.getState());
// });

// store.dispatch({
//   type: "ADD_TRACK",
//   payload: "Smels like spirit",
// });
// store.dispatch({
//   type: "ADD_TRACK",
//   payload: "Enter Sandman",
// });
