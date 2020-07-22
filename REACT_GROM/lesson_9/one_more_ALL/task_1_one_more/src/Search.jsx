import React, { Component } from "react";

class Search extends Component {
  render() {
    return (
      <form className="search">
        <input className="search__input" />
        <button className="search__button" type="submit">
          Search
        </button>
      </form>
    );
  }
}

export default Search;
