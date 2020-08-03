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

    const { temperature, school } = this.props;
    console.log(school);

    return (
      <fieldset>
        <legend>Введіть температуру в градусах {scaleNames[school]}:</legend>
        <input value={temperature} onChange={this.handleChange} />
      </fieldset>
    );
  }
}
export default TemperatureInput;
