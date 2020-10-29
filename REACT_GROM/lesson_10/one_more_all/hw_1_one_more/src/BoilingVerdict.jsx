import React from "react";

function BoilingVerdict({ celsius }) {
  if (celsius >= 100) {
    return <p className="green">The water would boil.</p>;
  }
  return <p className="red">The water would not boil.</p>;
}

export default BoilingVerdict;
