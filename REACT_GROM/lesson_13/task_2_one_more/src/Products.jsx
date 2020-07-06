import React from "react";
import Product from "./Product";
import { Route, Link, Switch } from "react-router-dom";

function Products({ match }) {
  return (
    <div className="page__content">
      <h1>Products</h1>
      <ul className="navigation">
        <li className="navigation__item">
          <Link to={`${match.url}/ball`}>Ball</Link>
        </li>
        <li className="navigation__item">
          <Link to="/products/book">Book</Link>
        </li>
      </ul>
      <Switch>
        <Route exact path="/products">
          <span>Select a product please</span>
        </Route>
        <Route path="/products/:productId" component={Product} />
      </Switch>
    </div>
  );
}

export default Products;
