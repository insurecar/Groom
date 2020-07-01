import { createStore } from "redux";

const ADD_TRACK = "ADD_TRACK";
const store = createStore(playlist);

function playlist(store = [], action) {
  switch (action.type) {
    case ADD_TRACK:
      return [...store, action.payload];
    default:
      return store;
  }
}

const addTrackBtn = document.querySelector("button");
const trackInput = document.querySelector("input");
const list = document.querySelector("ul");

const musicList = () => {
  list.textContent = "";
  trackInput.value = "";
  store.getState().forEach((track) => {
    const li = document.createElement("li");
    li.innerHTML = track;
    list.appendChild(li);
  });
};

store.subscribe(musicList);

const addTrack = () => {
  store.dispatch({
    type: ADD_TRACK,
    payload: trackInput.value,
  });
};

addTrackBtn.addEventListener("click", addTrack);
