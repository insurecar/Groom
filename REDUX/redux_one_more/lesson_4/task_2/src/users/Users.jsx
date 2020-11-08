import React from "react";
import store from "../store";
import { connect } from "react-redux";
import * as usersActions from "./users.actions";

const Users = ({ users, createUser, deleteUser }) => {
  console.log(users);

  const onCreateUser = () => {
    const id = Math.round(Math.random() * 1000000);

    const newUser = {
      id,
      name: `User # ${id}`,
    };
    createUser(newUser);
    console.log(store.getState());
  };

  return (
    <div className="users">
      <button className="users__create-btn" onClick={onCreateUser}>
        Create User
      </button>
      <ul className="users__list">
        {users.map((user) => (
          <li key={user.id} className="users__list-item">
            {user.name}
            <button className="users__delete-btn" onClick={() => deleteUser(user.id)}>
              +
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

const mapState = (state) => {
  return {
    users: state.users.usersList,
  };
};

const mapDispatch = {
  createUser: usersActions.addUser,
  deleteUser: usersActions.deleteUser,
};

export default connect(mapState, mapDispatch)(Users);
