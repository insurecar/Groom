import React from "react";

const TimesDay = () => {
  const timesBlock = [...Array(24).keys()].splice(1, 24).map((num) => {
    const correctTime = `0${num}`;

    return (
      <div key={num} className="time__day-hour">{`${correctTime.slice(
        -2
      )}:00`}</div>
    );
  });
  return <div className="time__day">{timesBlock}</div>;
};

export default TimesDay;
