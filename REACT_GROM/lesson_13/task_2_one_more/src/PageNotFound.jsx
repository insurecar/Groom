import React from "react";
import { Link } from "react-router-dom";

function PageNotFound() {
  return (
    <div className="page__content">
      <h1>Щось пішло не так...</h1>

      <Link to="/">Home</Link>
    </div>
  );
}

export default PageNotFound;
