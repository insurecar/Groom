import React, { Component } from "react";

const getTime = (timezone) => {
  const currentTimeZone = new Date().getTimezoneOffset() / 60;
  const locationTimeZone = new Date(
    new Date().setHours(new Date().getHours() + currentTimeZone + timezone)
  );
  return locationTimeZone;
};

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
    };
  }

  componentDidMount() {
    this.interval = setInterval(
      () =>
        this.setState({
          offset: getTime(this.props.offset).toLocaleTimeString("en-us"),
        }),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div className="clock">
        <div className="clock__location">{this.state.location}</div>
        <div className="clock__time">{this.state.offset}</div>
      </div>
    );
  }
}

export default Clock;
