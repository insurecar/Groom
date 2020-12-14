import React, { useRef } from "react";
// import { connect } from "react-redux";
import * as songActionCreator from "./actions/songAction";
import { useDispatch } from "react-redux";
import Songs from "./Songs";
import MusicList from "./MusicList";

const App = () => {
  const inpuText = useRef();
  const dispatch = useDispatch();

  const handleClickAddTrack = () => {
    const newTask = {
      id: Date().toString(),
      song: inpuText.current.value,
    };
    dispatch(songActionCreator.addTrack(newTask));
  };

  const handleAddPlayList = () => {
    console.log(inpuText);
  };

  return (
    <div className="container">
      <input ref={inpuText} type="text" className="input" />
      <button className="btn btn-success ml-3" onClick={() => handleClickAddTrack(inpuText)}>
        Add Track
      </button>
      <button className="btn btn-warning" onClick={() => handleAddPlayList(inpuText)}>
        Add track list
      </button>
      <ul className="list-group">
        <Songs {...inpuText} />
      </ul>
      <ul className="list-group">
        <MusicList {...inpuText} />
      </ul>
    </div>
  );
};

export default App;

//WITH  MAP_STATE   AND MAP_DISPATCH
// const App = ({ songs, addTrack, delTrack }) => {
//   const inpuText = useRef();

//   console.log(songs);

//   const handleClick = () => {
//     const newTask = {
//       id: Date().toString(),
//       song: inpuText.current.value,
//     };
//     addTrack(newTask);
//   };

//   const handleDelete = (id) => {
//     delTrack(id);
//   };

//   return (
//     <div className="container">
//       <input ref={inpuText} type="text" className="input" />
//       <button className="btn btn-success ml-3" onClick={handleClick}>
//         Add Track
//       </button>
//       <ul className="list-group">
//         {songs.map((track) => (
//           <li className="list-group-item d-flex justify-content-between align-items-center" key={track.id}>
//             {track.song}
//             <span className="badge badge-primary badge-pill" onClick={() => handleDelete(track.id)}>
//               *
//             </span>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// const mapState = (state) => ({
//   songs: state.songReducer.songs,
// });

// const mapDispatch = {
//   addTrack: songActionCreator.addTrack,
//   delTrack: songActionCreator.deleteTrack,
// };

// export default connect(mapState, mapDispatch)(App);
