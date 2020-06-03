import React, { Component } from "react";
import TemperatureInput from "./TemperatureInput";
import BoelingVerdict from "./BoelingVerdict";

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      temperature: "",
      scale: "c",
    };
  }

  handleCelsiusChange = (temperature) => {
    this.setState({
      scale: "c",
      temperature,
    });
  };

  handleFaranheitChange = (temperature) => {
    this.setState({
      scale: "c",
      temperature,
    });
  };

  render() {
    return (
      <div>
        <TemperatureInput
          scale="c"
          temperature={celsius}
          onTemperatureChange={this.handleCelsiusChange}
        />
        <TemperatureInput
          scale="f"
          temperature={faranheit}
          onTemperatureChange={this.handleFaranheitChange}
        />
        <BoelingVerdict celsius={parseFloat(celsius)} />
      </div>
    );
  }
}

export default Calculator;
