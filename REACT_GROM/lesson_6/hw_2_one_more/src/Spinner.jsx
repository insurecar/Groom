import React from "react";

const Spinner = ({ size }) => {
  return (
    <div
      style={{ width: size, height: size }}
      className="spinner"
      size={size}
    ></div>
  );
};

export default Spinner;
