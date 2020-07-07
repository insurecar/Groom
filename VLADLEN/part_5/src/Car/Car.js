import React, { Component } from "react";
// import Radium from "radium";
import classes from "./Car.css";
import withClass from "../hoc/withClass";
import PropTypes from "prop-types";

class Car extends Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
  }

  componentDidMount() {
    if (this.props.index === 1) {
      this.inputRef.current.focus();
    }
  }
  // componentWillReceiveProps(nextProps) {
  //   console.log("==>CAR componentWillReceiveProps ", nextProps);
  // }

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log("==>CAR shouldComponentUpdate ", nextProps, nextState);
  //   return nextProps.name.trim() !== this.props.name.trim();
  // }

  // componentWillUpdate(nextProps, nextState) {
  //   //отримуємо нові параметри і можемо оновляти state
  //   console.log("==>CAR componentWillUpdate ", nextProps, nextState);
  // }

  // static getDerivedStateFromProps(nextProps, prevState) {
  //   //тут немає this!!!
  //   console.log("==> CAR getDerivedStateFromProps", nextProps, prevState);
  //   return prevState;
  // }

  // componentDidUpdate() {
  //   console.log("==>CAR componentDidUpdate");
  // }

  // getSnapshotBeforeUpdate() {
  //   //запускається між рендером і дідмоунт
  //   console.log("==> CAR getDerivedStateFromProps");
  // }

  // componentWillUnmount() {
  //   console.log("==>CAR componentWillUnmount");
  // }

  render() {
    // console.log("==>CAR render");

    const inputClasses = [classes.input];

    if (this.props.name !== "") {
      inputClasses.push(classes.green);
    } else {
      inputClasses.push(classes.red);
    }

    if (this.props.name.length > 4) {
      inputClasses.push(classes.bold);
    }

    return (
      <React.Fragment>
        <h3>Сar name: {this.props.name}</h3>
        <p>
          Year: <strong>{this.props.year}</strong>
        </p>
        <input
          ref={this.inputRef}
          type="text"
          onChange={this.props.onChangeName}
          value={this.props.name}
          className={inputClasses.join(" ")}
        />
        <button onClick={this.props.onDelete}>Delete</button>
      </React.Fragment>
    );
  }
}

Car.propTypes = {
  name: PropTypes.string,
  year: PropTypes.number,
  onChangeName: PropTypes.func,
  onDelete: PropTypes.func,
  index: PropTypes.number,
};

export default withClass(Car, classes.Car);
