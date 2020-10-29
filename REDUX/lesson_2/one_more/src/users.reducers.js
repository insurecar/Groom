import { ADD_USER, DELETE_USER } from "./users.actions";

const userReducer = (state = { userList: [] }, action) => {
  switch (action.type) {
    case ADD_USER:
      return {
        ...state,
        userList: state.userList.concat(action.payload),
      };
    case DELETE_USER:
      return {
        ...state,
        userList: state.userList.filter(({ id }) => id !== action.payload),
      };
    default:
      return state;
  }
};

export default userReducer;
