const ADDUSER = "USER/ADD_USER";
const DELETEUSER = "USER/DELETE_USER";

const addUser = (data) => {
  return {
    type: ADDUSER,
    payload: {
      user: data,
    },
  };
};

const deleteUser = (id) => {
  return {
    type: DELETEUSER,
    payload: {
      id,
    },
  };
};

export { addUser, deleteUser, ADDUSER, DELETEUSER };
