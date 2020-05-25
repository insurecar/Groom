import React, { PureComponent } from "react";

class ColorPicker extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      title: "Choose the square",
      opasity: "",
    };
  }

  setTitle = (color, event) => {
    event.target.classList.add("picker__button_border");

    this.setState({
      title: color,
    });
  };

  setOpacity = (event) => {
    event.persist();
    console.log(event);

    this.setState({
      title: color,
    });
  };

  reset = () => {
    event.target.classList.remove("picker__button_border");

    this.setState({
      title: "Choose the square",
    });
  };

  render() {
    return (
      <div>
        <div className="picker__title">{this.state.title}</div>
        <div>
          <button
            className="picker__button picker__button_coral"
            onClick={this.setTitle.bind(this, "Coral")}
            onMouseEnter={this.setOpacity}
            onMouseLeave={this.reset}
          />
          <button
            className="picker__button picker__button_aqua"
            onClick={this.setTitle.bind(this, "Blue")}
            onMouseLeave={this.reset}
          />
          <button
            className="picker__button picker__button_bisque"
            onClick={this.setTitle.bind(this, "Bisque")}
            onMouseLeave={this.reset}
          />
        </div>
      </div>
    );
  }
}

export default ColorPicker;
