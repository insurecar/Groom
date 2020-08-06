import React from "react";
import { useParams } from "react-router-dom";

const Product = () => {
  const { productId, color } = useParams();
  return (
    <div className="product">
      <p>{productId}</p>
      <p>{color}</p>
    </div>
  );
};

export default Product;
