import React, { Component } from "react";

const scaleNames = {
  c: "Цельсій",
  f: "Фарангейт",
};

function toCelsius(faranheit) {
  return ((faranheit - 32) * 5) / 9;
}

function toFaranheit(celsius) {
  return (celsius * 9) / 5 + 32;
}

function tryConvert(temperature, convert) {
  const input = parseFloat(temperature);
  if (Number.isNaN(input)) {
    return "";
  }

  const output = convert(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}

class TemperatureInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      temperature: "",
    };
  }

  handleChange = (event) => {
    this.props.onTemperatureChange(event.target.value);
  };

  render() {
    const temperature = this.props.temperature;
    const scale = this.props.scale;
    console.log(scale);

    return (
      <fieldset>
        <legend>Введіть температуру в {scaleNames[scale]}:</legend>
        <input type="number" value={temperature} onChange={this.handleChange} />
      </fieldset>
    );
  }
}

export default TemperatureInput;
