import React from "react";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import User from "./pages/User";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link
                to={{
                  pathname: "/about",
                  state: {
                    from: "root",
                  },
                }}
              >
                About
              </Link>
            </li>
            <li>
              <Link to="/user/Vasyl/Velmyk">User</Link>
            </li>
          </ul>
          <div>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/about" component={About} />
              <Route exact path="/user/:firstname/:lastname" component={User} />
            </Switch>
          </div>
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;
