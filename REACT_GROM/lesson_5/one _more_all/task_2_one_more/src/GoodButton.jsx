import React, { Component } from "react";

class GoodButton extends Component {
  handleClick(event) {
    alert(event.target.textContent);
  }
  render() {
    return (
      <button className="fancy-button" onClick={this.handleClick}>
        Good job!
      </button>
    );
  }
}

export default GoodButton;
