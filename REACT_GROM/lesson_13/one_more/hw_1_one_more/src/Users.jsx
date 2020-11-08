import React from "react";
import { Link, Route } from "react-router-dom";
import User from "./User";

const Users = () => {
  return (
    <div className="page__content">
      <Route exact path="/users">
        <h1>Users</h1>
      </Route>
      <ul className="navigation">
        <li className="navigation__item">
          <Link to="/users/github">Github</Link>
        </li>
        <li className="navigation__item">
          <Link to="/users/facebook">Facebook</Link>
        </li>
      </ul>
      <Route path="/users/:usersName" component={User} />
    </div>
  );
};

export default Users;
