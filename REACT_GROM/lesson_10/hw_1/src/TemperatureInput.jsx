import React, { Component } from "react";

class TemperatureInput extends Component {
  handleChange = (event) => {
    this.props.onTemperatureChange(event.target.value);
  };

  render() {
    const scaleNames = {
      cel: "Цельсій",
      far: "Фарадей",
    };

    const { temperature, scale } = this.props;

    return (
      <fieldset>
        <legend>Введіть температуру в градусах {scaleNames[scale]}:</legend>
        <input value={temperature} onChange={this.handleChange} />
      </fieldset>
    );
  }
}
export default TemperatureInput;
