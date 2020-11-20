import { CREATE_POSTS, FETCH_POST } from "./types.js";

const initialState = {
  posts: [],
  fetchedPosts: [],
};

//Pure Functions

export const PostReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_POSTS:
      return {
        ...state,
        posts: state.posts.concat([action.payload]),
      };
    case FETCH_POST:
      return {
        ...state,
        fetchedPosts: action.payload.data,
      };
    default:
      return state;
  }
};
