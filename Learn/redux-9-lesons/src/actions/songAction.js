export const ADD_TRACK = "SONGS/ADD_TRACK";

export const DELETE_TRACK = "SONGS/DELETE_TRACK";

export const addTrack = (nameOfSong) => {
  return {
    type: ADD_TRACK,
    payload: nameOfSong,
  };
};

export const deleteTrack = (id) => {
  return {
    type: DELETE_TRACK,
    payload: id,
  };
};
