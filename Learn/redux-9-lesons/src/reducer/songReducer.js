import * as songsAction from "../actions/songAction";

const initialState = {
  songs: [
    { id: 1, song: "Smels Like Spirit" },
    { id: 2, song: "Sadmen" },
  ],
};

export const songReducer = (state = initialState, action) => {
  switch (action.type) {
    case songsAction.ADD_TRACK:
      return {
        ...state,
        songs: state.songs.concat(action.payload),
      };
    case songsAction.DELETE_TRACK:
      return {
        ...state,
        songs: state.songs.filter((song) => song.id !== action.payload),
      };
    default:
      return state;
  }
};
