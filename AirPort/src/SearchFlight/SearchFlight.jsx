import React from "react";

const SearchFlight = () => {
  return (
    <div className="search">
      <h2>Search flight</h2>
      <form action="" className="search__form">
        <input
          className="search__form_input"
          type="text"
          placeholder="Airline,destination or flight #"
        />
        <button className="search__form_button" type="submit">
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchFlight;
