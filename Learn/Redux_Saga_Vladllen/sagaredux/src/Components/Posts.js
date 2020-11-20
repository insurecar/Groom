import React from "react";
import Post from "./Post";
import { connect } from "react-redux";

const Posts = ({ syncPposts }) => {
  if (!syncPposts.length) {
    return <p className="text-center">Постів поки немає</p>;
  }
  return syncPposts.map((post) => <Post post={post} key={post.id} />);
};

const mapState = (state) => {
  return {
    syncPposts: state.posts.posts,
  };
};

export default connect(mapState, null)(Posts);
