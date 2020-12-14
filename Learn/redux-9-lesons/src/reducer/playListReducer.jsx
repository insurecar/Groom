import * as actionType from "../actions//playListActions";

const initialValue = {
  playlist: [
    { id: 3, name: "Nirvana" },
    { id: 4, name: "Scorpion" },
  ],
};

export const playListReducer = (state = initialValue, action) => {
  switch (action.type) {
    case actionType.ADD_PLAYLIST:
      return {
        ...state,
        playlist: [...state.playlist, action.payload],
      };
    case actionType.DELETE_PLAYLIST:
      return {
        ...state,
        playlist: state.playlist.filter((list) => list.id !== action.payload),
      };
    default:
      return state;
  }
};
