import React, { Component } from "react";

class Life extends Component {
  constructor(props) {
    super(props);
    console.log("==> constructor");
  }

  componentDidMount() {
    console.log("==> componentDidMount");
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log(nextProps, nextState);

    console.log("==> shouldComponentUpdate"); //запускається перед render, має вернути булеве значення

    return nextProps.number;
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(prevProps); //приймає попереднє значення, на крок по заду

    console.log("==> shouldComponentUpdate");
  }

  componentWillUnmount() {
    console.log("==> componentWillUnMount");
  }

  render() {
    console.log("==> render");
    return <div className="number">{this.props.number}</div>;
  }
}

export default Life;
