import React, { Component } from "react";
import ProductCategoryRow from "./ProductCategoryRow";
import ProductRow from "./ProductRow";

class ProductTable extends Component {
  render() {
    const rows = [];
    let lastCategory = null;

    this.props.products.forEach((product) => {
      if (product.category !== lastCategory) {
        rows.push(<ProductCategoryRow product={product} key={product.name} />);
      }
      rows.push(<ProductRow product={product} key={product.price} />);
      lastCategory = product.category;
    });

    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
  }
}

export default ProductTable;
