import React, { Component } from "react";
import TemperatureInput from "./TemperatureInput";

import BoilingVerdict from "./BoilingVerdict";

class Calculator extends Component {
  state = {
    temperature: "",
    scale: "c",
  };

  handleCelsiusChange = (temperature) => {
    this.setState({
      scale: "c",
      temperature,
    });
  };

  handleFahrenheitChange = (temperature) => {
    this.setState({
      scale: "f",
      temperature,
    });
  };

  render() {
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

    const { scale, temperature } = this.state;
    const celsius =
      scale === "f" ? tryConvert(temperature, toCelsius) : temperature;

    const fahrenheit =
      scale === "c" ? tryConvert(temperature, toFahrenheit) : temperature;

    return (
      <div>
        <TemperatureInput
          scale="cel"
          temperature={celsius}
          onTemperatureChange={this.handleCelsiusChange}
        />
        <TemperatureInput
          scale="far"
          temperature={fahrenheit}
          onTemperatureChange={this.handleFahrenheitChange}
        />
        <BoilingVerdict celsius={parseFloat(celsius)} />
      </div>
    );
  }
}

export default Calculator;
