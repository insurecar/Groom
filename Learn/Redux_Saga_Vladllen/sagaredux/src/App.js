import React from "react";
import PostForm from "./Components/PostForm";
import Posts from "./Components/Posts";
import FetchPost from "./Components/FeetchedPosts";

function App() {
  return (
    <div className="container pt-3">
      <div className="row">
        <div className="col">
          <PostForm />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <h2>Синхронні Пости</h2>
          <Posts />
        </div>
        <div className="col">
          <h2>Асинхронні Пости</h2>

          <FetchPost />
        </div>
      </div>
    </div>
  );
}

export default App;
