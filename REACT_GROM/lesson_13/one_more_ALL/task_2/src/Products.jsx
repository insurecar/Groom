import React from "react";
import Product from "./Product";
import { Link, Switch, Route, useRouteMatch } from "react-router-dom";
import NotFindPage from "./NotFindPage";

const Products = () => {
  const { url } = useRouteMatch();

  return (
    <div className="page__content">
      <h1>Products</h1>
      <ul className="navigation">
        <li className="navigation__item">
          <Link to={`${url}/ball/white`}>Ball</Link>
        </li>
        <li className="navigation__item">
          <Link to={`${url}/book/green`}>Book</Link>
        </li>
      </ul>

      <Switch>
        <Route exact path="/products">
          <span>Choose a product please</span>
        </Route>
        <Route path={`${url}/:productId/:color`} component={Product} />
        <Route path="*" component={NotFindPage} />
      </Switch>
    </div>
  );
};

export default Products;
