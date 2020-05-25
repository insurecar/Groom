import React, { Component } from "react";

class Toggler extends Component {
  state = {
    isToggle: false,
  };

  render() {
    return (
      <div
        className="toggler"
        onClick={() => {
          this.setState({
            isToggle: !this.state.isToggle,
          });
        }}
      >
        {!!!!!!this.state.isToggle ? "ON" : "OFF"}
      </div>
    );
  }
}

export default Toggler;
