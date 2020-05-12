import React from "react";

function BoilingVerdict({ celsius }) {
  if (celsius >= 100) {
    return <p>Вода закипит.</p>;
  }
  return <p>Вода не закипит.</p>;
}

export default BoilingVerdict;
