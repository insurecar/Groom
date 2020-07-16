const ADD_USER = "USER/ADD_USER";
const DELETE_USER = "USER/DELETE_USER";

const addUser = (user) => ({
  type: ADD_USER,
  payload: user,
});

const deleteUser = (id) => ({
  type: DELETE_USER,
  payload: id,
});

export { ADD_USER, DELETE_USER, addUser, deleteUser };
