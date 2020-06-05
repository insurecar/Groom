import React from "react";
import Users from "./Users";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import Home from "./Home";

function App() {
  return (
    <div className="page">
      <BrowserRouter>
        <ul className="navigation">
          <li to="navigation__item">
            <Link to="/users">Users</Link>
          </li>
          <li className="navigation__item">
            <Link to="/">Home</Link>
          </li>
        </ul>

        <Route path="/" component={Home} />
        {/* <Home />
        </Route> */}
        <Route path="/users/:userId" component={Users} />
      </BrowserRouter>
    </div>
  );
}

export default App;
