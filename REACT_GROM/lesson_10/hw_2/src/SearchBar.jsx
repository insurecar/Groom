import React, { Component } from "react";

class SearchBar extends Component {
  render() {
    const { filterText, inStockOnly } = this.props;

    return (
      <form>
        <input type="text" placeholder="Search..." value={filterText} />
        <p>
          <input type="checkbox" checked={inStockOnly} /> Only show products in
          stock
        </p>
      </form>
    );
  }
}

export default SearchBar;
