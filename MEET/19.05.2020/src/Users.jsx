import React from "react";
import User from "./User";
import { Route, Link } from "react-router-dom";

const Users = () => {
  return (
    <div className="page__content">
      <h1>Users</h1>
      <ul className="navigation">
        <li className="navigation__item">
          <a href="/users/github">Github</a>
        </li>
        <li className="navigation__item">
          <a href="/users/facebook">Facebook</a>
        </li>
      </ul>
    </div>
  );
};

export default Users;
