export const ADD_PLAYLIST = "LIST/ADD_PLAYLIST";

export const DELETE_PLAYLIST = "LIST/DELETE_PLAYLIST";

export const addPlayList = (list) => ({ type: ADD_PLAYLIST, payload: list });

export const delPlayList = (id) => ({ type: DELETE_PLAYLIST, payload: id });
