import React from "react";
import { BrowserRouter, Link, Switch, Route } from "react-router-dom";
import User from "./pages/User";

function App() {
  return (
    <BrowserRouter>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/users">Users</Link>
          </li>
        </ul>
        <Switch>
          <Route exact path="/">
            Go home!
          </Route>
          <Route path="/about">Tell about...</Route>
          <Route path="/users/:firstName/:lastName" component={User} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
