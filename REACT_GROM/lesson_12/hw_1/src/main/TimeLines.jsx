import React from "react";

const TimeLines = () => (
  <div className="time__lines">
    {[Array(24).keys()].map((elem) => (
      <div key={elem} className="time__line"></div>
    ))}
  </div>
);

export default TimeLines;
