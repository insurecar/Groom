import React, { Component } from "react";
import TemperatureInput from "./TemperatureInput";
import { boiling, toCelsius, toFahrenheit, tryConvert } from "./Func";
// import BoilingVerdict from "./BoilingVerdict";

class Calculator extends Component {
  state = {
    temperature: "",
    scale: "c",
  };

  handleCelsiusChange = (inputTemp) => {
    this.setState({
      scale: "c",
      temperature: inputTemp,
    });
  };

  handleFahrenheitChange = (inputTemp) => {
    this.setState({
      scale: "f",
      temperature: inputTemp,
    });
  };

  render() {
    const { scale, temperature } = this.state;

    const celsius =
      scale === "f" ? tryConvert(temperature, toCelsius) : temperature;
    12;
    const fahrenheit =
      scale === "c" ? tryConvert(temperature, toFahrenheit) : temperature;

    return (
      <div>
        <TemperatureInput
          school="cel"
          temperature={celsius}
          onTemperatureChange={this.handleCelsiusChange}
        />
        <TemperatureInput
          school="far"
          temperature={fahrenheit}
          onTemperatureChange={this.handleFahrenheitChange}
        />
        {boiling(celsius)}
        {/* <BoilingVerdict celsius={parseFloat(celsius)} /> */}
      </div>
    );
  }
}

export default Calculator;
