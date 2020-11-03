import { ADDUSER, DELETEUSER } from "./user.actions";
const initialValue = {
  usersList: [],
};

const userReducer = (state = initialValue, action) => {
  switch (action.type) {
    case ADDUSER:
      return {
        ...state,
        usersList: state.usersList.concat(action.payload.user),
      };
    case DELETEUSER:
      return {
        ...state,
        usersList: state.usersList.filter((user) => user.id !== action.payload.id),
      };
    default:
      return state;
  }
};

export default userReducer;
