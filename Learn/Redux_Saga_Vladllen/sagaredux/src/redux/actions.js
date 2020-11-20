import { CREATE_POSTS, FETCH_POST, HIDE_LOADER, SHOW_LOADER } from "./types";
import axios from "axios";

export const createPost = (post) => {
  return {
    type: CREATE_POSTS,
    payload: post,
  };
};

export function showLoader() {
  return {
    type: SHOW_LOADER,
  };
}

export function hideLoader() {
  return {
    type: HIDE_LOADER,
  };
}

export function fetchPosts() {
  return (dispatch) => {
    dispatch(showLoader()); 
    axios
      .get("https://jsonplaceholder.typicode.com/posts?_limit=150")
      .then((response) => dispatch({ type: FETCH_POST, payload: response }));
    dispatch(hideLoader());
  };
}
