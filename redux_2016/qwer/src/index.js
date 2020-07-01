import { createStore } from "redux";

const ADD_TRACK = "ADD_TRACK";
const DELETE_TRACK = "DELETE_TRACK";

const addTrackBtn = document.querySelector(".addTrack");
const deleteTrackBTN = document.querySelector(".delete");
const inputIn = document.querySelector("input");
const list = document.querySelector("ul");

const playList = (state = [], action) => {
  switch (action.type) {
    case ADD_TRACK:
      return [...state, action.payload];
    case DELETE_TRACK:
      return state.filter((elem) => elem != inputIn.value);
    default:
      return state;
  }
};

const store = createStore(playList);

const playListNew = () => {
  list.innerHTML = "";
  inputIn.value = "";
  store.getState().forEach((track) => {
    const li = document.createElement("li");
    li.innerHTML = track;
    list.append(li);
  });
};

store.subscribe(playListNew);

const addTrack = () => {
  store.dispatch({
    type: ADD_TRACK,
    payload: inputIn.value,
  });
};

const dltTrack = () => {
  store.dispatch({
    type: DELETE_TRACK,
    payload: inputIn.value,
  });
};

addTrackBtn.addEventListener("click", addTrack);
deleteTrackBTN.addEventListener("click", dltTrack);

// import { createStore } from "redux";

// const ADD_TRACK = "ADD_TRACK";
// const DELETE_TRACK = "DELETE_TRACK";
// const addBtn = document.querySelector(".addTrack");
// const dltBtn = document.querySelector(".delete");
// const input = document.querySelector("input");
// const list = document.querySelector("ul");

// const playList = (state = [], action) => {
//   switch (action.type) {
//     case ADD_TRACK:
//       return [...state, action.payload];
//     case DELETE_TRACK:
//       return state.filter((el) => el !== input.value);
//     default:
//       return state;
//   }
// };

// const store = createStore(playList);

// const musicList = () => {
//   list.innerHTML = "";
//   input.value = "";
//   store.getState().forEach((track) => {
//     const li = document.createElement("li");
//     li.textContent = track;
//     list.appendChild(li);
//   });
// };

// store.subscribe(musicList);

// const addTrack = () => {
//   store.dispatch({
//     type: ADD_TRACK,
//     payload: input.value,
//   });
// };

// const delTrack = () => {
//   store.dispatch({
//     action: DELETE_TRACK,
//     payload: input.value,
//   });
// };

// addBtn.addEventListener("click", addTrack);
// dltBtn.addEventListener("click", delTrack);
