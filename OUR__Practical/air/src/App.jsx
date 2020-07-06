import React, { useState } from "react";
import { Link, BrowserRouter, Route, Switch } from "react-router-dom";
import Flight from "./Flight";
import { getFetchFlights } from "./gateWays";

const App = ({ match }) => {
  const [flights, setFlights] = useState("Profi");
  const getData = () => {
    getFetchFlights().then((data) =>
      setFlights({
        id1: data.body.departure[0].ID,
        id2: data.body.arrival[1].ID,
      })
    );
  };
  document.addEventListener("DOMContentLoaded", getData());
  return (
    <div className="qwe">
      <BrowserRouter>
        <button>
          <Link to="/departure">Departured</Link>
        </button>
        <button>
          <Link to="/arrivals">Arrivals</Link>
        </button>
        <Switch>
          <Route path="/departure">
            <Flight>Vasia - {flights.id1}</Flight>
          </Route>
          <Route path="/arrivals">
            <Flight>Andriy - {flights.id2}</Flight>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
};
export default App;
