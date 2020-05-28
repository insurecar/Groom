import React from "react";

const TodayButton = ({ onWeek }) => {
  return (
    <button className="show-today-btn" onClick={onWeek}>
      <span className="today-text">Today</span>
    </button>
  );
};

export default TodayButton;
