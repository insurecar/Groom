import React from "react";
import { useSelector, useDispatch } from "react-redux";
import * as songActionCreator from "./actions/songAction";

const Songs = () => {
  const dispatch = useDispatch();
  const songsState = useSelector((state) => state.songReducer.songs);

  const handleDelete = (id) => {
    dispatch(songActionCreator.deleteTrack(id));
  };

  return songsState.map((track) => (
    <li className="list-group-item d-flex justify-content-between align-items-center" key={track.id}>
      {track.song}
      <span className="badge badge-primary badge-pill" onClick={() => handleDelete(track.id)}>
        *
      </span>
    </li>
  ));
};

export default Songs;
