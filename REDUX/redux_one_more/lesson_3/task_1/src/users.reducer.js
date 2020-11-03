import { ADD_USER, DELETE_USER, UPDATE_USER } from "./users.actions";

const initialState = {
  usersList: [],
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER:
      return {
        ...state,
        usersList: state.usersList.concat(action.payload.userData),
      };
    case DELETE_USER:
      return {
        ...state,
        usersList: state.usersList.filter((user) => user.id !== action.payload.userId),
      };
    case UPDATE_USER: {
      const newList = state.usersList.map((user) =>
        user.id === action.payload.userId
          ? {
              ...user,
              ...action.payload.userData,
            }
          : user
      );
      return {
        ...state,
        usersList: newList,
      };
    }

    default:
      return state;
  }
};

export { userReducer };
