import React from "react";

const BoelingVerdict = ({ celsius }) => {
  if (celsius > 100) {
    return <p className="tr">Вода зикипить</p>;
  }
  return <p className="fa">Вода не зикипить</p>;
};

export default BoelingVerdict;
