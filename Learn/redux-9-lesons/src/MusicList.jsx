import React from "react";
import { connect } from "react-redux";
import { delPlayList } from "./actions/playListActions";

const MusicList = ({ list, delPlayList, inpuText, playList }) => {
  console.log(playList);
  const handleDelete = (id) => {
    delPlayList(id);
  };

  return list.map((playList) => (
    <li className="list-group-item d-flex justify-content-between align-items-center" key={playList.id}>
      {playList.name}
      <span className="badge badge-primary badge-pill" onClick={() => handleDelete(playList.id)}>
        *
      </span>
    </li>
  ));
};

const mapState = (state) => ({ list: state.playListReducer.playlist });
const mapDispatch = {
  delPlayList,
};

export default connect(mapState, mapDispatch)(MusicList);
