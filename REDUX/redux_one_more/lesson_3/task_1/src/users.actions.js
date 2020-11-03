const ADD_USER = "USER/ADD_USER";
const DELETE_USER = "USER/DELETE_USER";
const UPDATE_USER = "USER/UPDATE_USER";

const addUser = (userData) => {
  return {
    type: ADD_USER,
    payload: {
      userData,
    },
  };
};

const deleteUser = (userId) => {
  return {
    type: DELETE_USER,
    payload: {
      userId,
    },
  };
};

const updateUser = (userId, userData) => {
  return {
    type: UPDATE_USER,
    payload: {
      userId,
      userData,
    },
  };
};

export { ADD_USER, DELETE_USER, UPDATE_USER, addUser, deleteUser, updateUser };
