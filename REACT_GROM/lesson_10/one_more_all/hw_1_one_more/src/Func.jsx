import React from "react";

const boiling = (cel) => {
  return parseFloat(cel) > 100 ? (
    <p className="green">The water would boil.</p>
  ) : (
    <p className="red">The water would not boil.</p>
  );
};

const toCelsius = (fahrenheit) => ((fahrenheit - 32) * 5) / 9;

const toFahrenheit = (celsius) => (celsius * 9) / 5 + 32;

const tryConvert = (temperature, convert) => {
  const input = parseFloat(temperature);
  if (Number.isNaN(input)) {
    return "";
  }
  const output = convert(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
};

export { boiling, toCelsius, toFahrenheit, tryConvert };
