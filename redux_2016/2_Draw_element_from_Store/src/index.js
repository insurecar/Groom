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

const addTrackBtn = document.querySelector(".addTrack");
const trackInput = document.querySelector(".trackInput");
const list = document.querySelector(".list");

store.subscribe(() => {
  list.innerHTML = "";
  trackInput.value = "";

  store.getState().forEach((track) => {
    const li = document.createElement("li");
    li.textContent = track;
    list.appendChild(li);
  });
});

const addTrackBtn = document.querySelectorAll(".addTrack")[0];

const addTrack = () => {
  const trackName = document.querySelectorAll(".trackInput")[0].value;
  console.log("trackName", trackName);
  store.dispatch({
    type: "ADD_TRACK",
    payload: trackName,
  });
};

addTrackBtn.addEventListener("click", addTrack);
