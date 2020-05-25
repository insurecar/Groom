import React, { Component } from "react";

class ColorPicker1 extends Component {
  state = {
    text: "SOME TEXT",
  };

  showColor = (event) => {
    console.log(event.target.value);
    this.setState({
      text: event.target.value,
    });
  };

  hideColor = (event) => {
    this.setState({
      text: "ЗДОРОВ ВАСЯ!!!",
    });
  };

  oneFun = (event) => {
    event.target.style.background = "";
    event.target.style.width = "";
    event.target.style.height = "";
    event.target.style.borderColor = "";
  };

  changeBorderColor = (event) => {
    // event.target.setAttribute("style", "background-color:yellow;width:100px");
    event.target.setAttribute("our-value", "we_learn_REACT");

    event.target.style.background = "yellow";
    event.target.style.width = "100px";
    event.target.style.height = "100px";
    event.target.style.borderColor = "#f00";
  };

  render() {
    return (
      <div>
        <div className="picker__title">{this.state.text}</div>
        <div>
          <button
            className="picker__button picker__button_coral"
            value="CORAL"
            onMouseEnter={this.showColor}
            onMouseLeave={(this.hideColor, this.oneFun)}
            onClick={this.changeBorderColor}
          ></button>
          <button
            className="picker__button picker__button_aqua"
            value="BLUE"
            onMouseEnter={this.showColor}
            onMouseLeave={this.hideColor}
            onClick={this.changeBorderColor}
          ></button>
          <button
            className="picker__button picker__button_bisque"
            value="BISQiT"
            onMouseEnter={this.showColor}
            onMouseLeave={this.hideColor}
            onClick={this.changeBorderColor}
          ></button>
        </div>
      </div>
    );
  }
}

export default ColorPicker1;
