import moment from "moment";
import React, { useState } from "react";
import { getFlightsFetch } from "../../gateWays";

const FlightList = () => {
  const allFlights = {
    flightsArrival: [
      {
        id: "",
        terminal: "",
        localTime: "",
        destination: "",
        airline: "",
        logo: "",
        status: "",
        flight: "",
      },
    ],
    flightsDeparture: [
      {
        id: "",
        terminal: "",
        localTime: "",
        destination: "",
        airline: "",
        logo: "",
        status: "",
        flight: "",
      },
    ],
  };
  const [state, setState] = useState(allFlights);

  const my = () => {
    getFlightsFetch().then((data) => {
      moment.locale("uk");
      const todayDeparture = data.body.departure.filter((el) => {
        console.log(
          "Дата польоту: " + el.timeDepExpectCalc,
          moment(el.timeDepExpectCalc).format("DD-MM-YYYY"),
          "Час польоту: " + moment(el.timeDepExpectCalc).format("LT")
        );
        // console.log(
        //   "Сьогоднішеня дата" + moment().format("DD-MM-YYYY")
        // );

        return (
          moment(el.timeDepExpectCalc).format("DD-MM-YYYY") ===
          moment().format("DD-MM-YYYY")
        );
      });
      const todayArrival = data.body.arrival.filter(
        (el) =>
          moment(el.timeArrExpectCalc).format("DD-MM-YYYY") ===
          moment().format("DD-MM-YYYY")
      );
      const flightsDeparture = todayDeparture.map((flight) => {
        const {
          ID,
          term,
          timeDepExpectCalc,
          timeTakeofFact,
          airline,
          codeShareData,
        } = flight;
        return {
          id: ID,
          terminal: term,
          localTime: moment(timeDepExpectCalc).format("LT"),
          destination: flight["airportToID.name_en"],
          airline: airline.en.name,
          logo: airline.en.logoName,
          status: timeTakeofFact || "On time",
          flight: codeShareData[0].codeShare,
        };
      });
      const flightsArrival = todayArrival.map((flight) => {
        const {
          ID,
          term,
          timeLandCalc,
          timeLandFact,
          airline,
          codeShareData,
        } = flight;
        return {
          id: ID,
          terminal: term,
          localTime: moment(timeLandCalc).format("LT"),
          destination: flight["airportFromID.name_en"],
          airline: airline.en.name,
          logo: airline.en.logoName,
          status: !timeLandFact
            ? "On time"
            : moment(timeLandFact).format("LT"),
          flight: codeShareData[0].codeShare,
        };
      });
      setState({ flightsArrival, flightsDeparture });
    });
  };
  document.addEventListener("DOMContentLoaded", () => {
    my();
  });
  return (
    <div className="">
      <button onClick={my}>Push</button>
      <table className="table">
        <thead>
          <tr>
            <th>Terminal</th>
            <th>Local Time</th>
            <th>Destination</th>
            <th>Status</th>
            <th>Airline</th>
            <th>Flight</th>
          </tr>
        </thead>
        <tbody>
          {state.flightsArrival.map((el) => (
            <tr key={el.id}>
              <td>{el.terminal}</td>
              <td>{el.localTime}</td>
              <td>{el.destination}</td>
              <td>{el.status}</td>
              <td style={{ display: "flex" }}>
                <img
                  style={{ width: "100px", height: "50px" }}
                  src={el.logo}
                  alt=""
                />
                <span
                  style={{ display: "flex", alignItems: "center" }}
                >
                  {el.airline}
                </span>
              </td>

              <td>{el.flights}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FlightList;
