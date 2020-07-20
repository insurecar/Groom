import React, { Component } from "react";
import "./clock.scss";

class Clock extends Component {
  constructor(props) {
    super(props);
    let timeZone = require("moment-timezone")
      .tz(`${this.props.materik}/${this.props.location}`)
      .format("hh:mm:ss");
    this.state = {
      time: timeZone,
    };

    setInterval(() => {
      this.setState({
        time: require("moment-timezone")
          .tz(`${this.props.materik}/${this.props.location}`)
          .format("hh:mm:ss"),
      });
    }, 1000);
  }
  render() {
    console.log(this.props);

    return (
      <div className="clock">
        <div className="clock__location">{this.props.location}</div>
        <div className="clock__time">{this.state.time}</div>
      </div>
    );
  }
}

export default Clock;
