import React from "react";
import Home from "./Home";
import { Link, BrowserRouter, Route, Switch } from "react-router-dom";
import Products from "./Products";
import NotFindPage from "./NotFindPage";

const App = () => {
  return (
    <div className="page">
      <BrowserRouter>
        <ul className="navigation">
          <li className="navigation__item">
            <Link to="/">Home</Link>
          </li>
          <li className="navigation__item">
            <Link to="/products">Product</Link>
          </li>
        </ul>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/products" component={Products} />
          <Route path="*" component={NotFindPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
