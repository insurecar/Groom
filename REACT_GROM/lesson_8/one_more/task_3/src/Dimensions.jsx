import React, { Component } from "react";

class Dimensions extends Component {
  state = {
    width: null,
    height: null,
  };

  componentDidMount() {
    window.addEventListener("resize", this.onResize);
    const { innerWidth, innerHeight } = window;

    this.setDimensions(innerWidth, innerHeight);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.onResize);
  }

  onResize = (event) => {
    const { innerWidth, innerHeight } = event.target;
    this.setDimensions(innerWidth, innerHeight);
  };

  setDimensions = (width, height) => {
    this.setState({
      width: width,
      height: height,
    });
    document.title = `${innerWidth} X ${innerHeight}`;
  };

  render() {
    const { width, height } = this.state;
    return <div className="dimensions">{`${width} px  X ${height} px`}</div>;
  }
}

export default Dimensions;
