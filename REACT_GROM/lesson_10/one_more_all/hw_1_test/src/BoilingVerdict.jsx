import React from "react";

const BoilingVerdict = ({ celsius }) =>
  celsius >= 100 ? (
    <p className="green">The water would boil.</p>
  ) : (
    <p className="red">The water would not boil.</p>
  );

export default BoilingVerdict;
