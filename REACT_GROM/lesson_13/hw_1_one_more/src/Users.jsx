import React from "react";
import { Link, Switch, Route } from "react-router-dom";
import User from "./User";

const Users = () => {
  return (
    <div className="page__content">
      <h1>Users</h1>
      <ul className="navigation">
        <li className="navigation__item">
          <Link to="/users/insurecar">Github</Link>
        </li>
        <li className="navigation__item">
          <Link to="/users/nikolay07">Facebook</Link>
        </li>
      </ul>
      <Switch>
        <Route exact path="/users">
          <span>Choose user</span>
        </Route>
        <Route path="/users/:userId" component={User} />
      </Switch>
    </div>
  );
};

export default Users;
