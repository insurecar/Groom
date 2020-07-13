import React from "react";
import Navlink from "./NavLink/NavLink";
import FlightList from "./FlightList/FlightList";
import FlightsItem from "./FlightList/FlightsItem";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";

const Flights = () => {
  return (
    <Router>
      <main className="flights">
        <div className="flights__navigation">
          <Link to="/departures">
            <Navlink className="btn">Departures</Navlink>
          </Link>
          <Link to="/arrivals">
            <Navlink className="btn">Arrivals</Navlink>
          </Link>
        </div>
        <Switch>
          <Route path="/:id" children={<FlightsItem />} />
        </Switch>
        <FlightList />
      </main>
    </Router>
  );
};
export default Flights;
