import React from "react";
import Header from "./Header/Header";
import SearchFlight from "./SearchFlight/SearchFlight";
import Flights from "./Flights/Fligths";

const App = () => {
  return (
    <>
      <Header />
      <SearchFlight />
      <Flights />
    </>
  );
};

export default App;
