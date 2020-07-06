import React from "react";

const Product = ({ ...rest }) => {
  console.log(rest);

  return (
    <div className="product">{`Вибраний продукт: ${rest.match.params.productId}`}</div>
  );
};

export default Product;
