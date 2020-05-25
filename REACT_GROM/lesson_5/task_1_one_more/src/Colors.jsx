import React, { Component } from "react";

const RED = "#f00";
const GREEN = "#0f0";
const BLUE = "#00f";

class Colors extends Component {
  setBodyColor = (color) => {
    document.body.style.background = color;
  };

  render() {
    return (
      <div className="colors">
        <button
          onClick={(e) => this.setBodyColor(RED, e)}
          className="colors__button"
          style={{
            background: RED,
          }}
        />
        <button
          onClick={() => this.setBodyColor(GREEN)}
          className="colors__button"
          style={{
            background: GREEN,
          }}
        />
        <button
          onClick={() => this.setBodyColor(BLUE)}
          className="colors__button"
          style={{
            background: BLUE,
          }}
        />
      </div>
    );
  }
}

export default Colors;
