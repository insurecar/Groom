import React from "react";
import moment from "moment";

const body = {
  arivals: [
    {
      ID: 2000031308473,
      term: "A",
      timeToStand: "2020-06-25T04:20:00Z",
      timeLandFact: "2020-06-25T23:20:00Z",

      codeShareData: [
        {
          codeShare: "B2848",
          airline: {
            en: {
              name: "Belavia",
              logoName:
                "https://api.iev.aero/media/airline/files/5ab0f18c6946b170090875.png",
            },
          },
        },
      ],
    },
  ],
  departure: [
    {
      ID: 2000031308473,
      term: "A",
      timeToStand: "2020-06-25T04:20:00Z",
      timeTakeofFact: "2020-06-25T04:20:00Z",

      codeShareData: [
        {
          codeShare: "B2848",
          logo: "/media/airline/files/5ab0f18c6946b170090875.png",
          airline: {
            en: {
              name: "Belavia",
              logoName:
                "https://api.iev.aero/media/airline/files/5ab0f18c6946b170090875.png",
            },
          },
        },
      ],
    },
  ],
};

// console.log(moment().local("ru").format("MMMM Do YYYY, h:mm:ss a"));
// console.log(moment.utc("2020-06-25T23:20:00Z").format("LT") + 3);
// console.log(new Date("2020-06-25T23:20:00Z").getUTCHours() + 3);

const FlightList = () => {
  return (
    <div className="">
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
          {body.arivals.map((el) => (
            <tr key={el.ID}>
              <td>{el.term}</td>
              <td>{moment(el.timeToStand).local().format("LT")}</td>
              <td>{el.codeShareData[0].airline.en.name}</td>
              <td>{moment(el.timeLandFact).local().format("LT")}</td>
              <td style={{ display: "flex" }}>
                <img
                  style={{ width: "100px", height: "50px" }}
                  src={el.codeShareData[0].airline.en.logoName}
                  alt=""
                />
                <span
                  style={{ display: "flex", alignItems: "center" }}
                >
                  {el.codeShareData[0].airline.en.name}
                </span>
              </td>

              <td>{el.codeShareData[0].codeShare}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FlightList;
