import { combineReducers } from "redux";
import { PostReducer } from "./postsReducer";
import { appReducer } from "./appReducer";

export const rootReducer = combineReducers({
  posts: PostReducer,
  app: appReducer,
});
