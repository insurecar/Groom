import React from "react";
import { Route, Link, Switch, useRouteMatch } from "react-router-dom";
import Product from "./Product";

const Products = (rest) => {
  const { url, path } = useRouteMatch();
  console.log(rest);

  return (
    <div className="page__content">
      <h1>Products</h1>
      <ul className="navigation">
        <li className="navigation__item">
          <Link to={`${url}/book/white`}>Book</Link>
        </li>
        <li className="navigation__item">
          <Link to={`${url}/ball/blue`}>Ball</Link>
        </li>
        <li className="navigation__item">
          <Link to={`${url}/pen/red`}>Pen</Link>
        </li>
      </ul>
      <Switch>
        <Route exact path={`${url}`}>
          <span>Select a product please</span>
        </Route>
        <Route path={`${url}/:productId/:color`}>
          <Product />
        </Route>
      </Switch>
    </div>
  );
};

export default Products;
