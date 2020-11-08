import React from "react";
import Home from "./Home";
import Users from "./Users";
import { Link, BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <div className="page__content">
      <Router>
        <ul className="navigation">
          <li className="navigation__item">
            <Link to="/">Home</Link>
          </li>
          <li className="navigation__item">
            <Link to="/users">Users</Link>
          </li>
        </ul>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/users" component={Users} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
