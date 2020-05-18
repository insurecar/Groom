import React, { Component } from "react";
import DrawButton from "./DrawButton";

class Button_1 extends Component {
  state = {
    isClick: false,
    styleCSS: {
      backgroundColor: "red",
    },
    myButton: [
      { nameButton: "PU__SH" },
      { nameButton: "React" },
      { nameButton: "Redux" },
    ],
  };

  changeColor = () => {
    if (!this.state.isClick) {
      this.setState({
        isClick: true,
        styleCSS: {
          backgroundColor: "green",
        },
      });
    } else {
      this.setState({
        isClick: false,
        styleCSS: {
          backgroundColor: "red",
        },
      });
    }
  };

  render() {
    console.log(this.state.myButton);

    let someButton = this.state.myButton.map((elem) => (
      <DrawButton
        name={elem.nameButton}
        style={this.state.styleCSS}
        onChange={this.changeColor}
        key={Math.random()}
      />
    ));

    return <>{someButton}</>;
  }
}

export default Button_1;
