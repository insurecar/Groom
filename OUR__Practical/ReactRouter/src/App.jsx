import React, { Component, useState } from "react";
import { Link, Switch, Route, NavLink, Redirect } from "react-router-dom";
import User from "./User";
import Student from "./Student";
import Home from "./Home ";
import Puper from "./Puper";

const App = () => {
  const [state, setState] = useState({ company: "GROOM" });

  return (
    <div className="page">
      <NavLink
        activeClassName="activclass"
        style={{ margin: "10px" }}
        to={{
          pathname: "/student",
          search: "?id=1",
        }}
        company={state.company}
      >
        Student
      </NavLink>

      <NavLink
        // activeClassName="activclass"
        activeStyle={{
          background: "red",
          color: "white",
        }}
        style={{ margin: "10px" }}
        to={{
          pathname: "/puper",
          search: "?id=2",
        }}
      >
        Puper
      </NavLink>

      <NavLink
        activeClassName="activclass"
        style={{ margin: "10px" }}
        to={{
          pathname: "/home",
          search: "?id=3",
          hash: "#home",
        }}
      >
        Home
      </NavLink>
      <Switch>
        <Route exact path="/home" component={Home} />
        <Route path="/student" component={Student} />
        <Route path="/puper" component={Puper} />
        {/* <Redirect to="/" /> */}
      </Switch>
    </div>
  );
};
export default App;
