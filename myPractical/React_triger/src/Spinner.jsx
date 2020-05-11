import React, { Component } from "react";

class Spinner extends Component {
  state = {
    width: this.props.size,
    height: this.props.size,
    red: this.props.borderColor,
  };

  render() {
    const { width, height, red } = this.state;
    const styles = {
      width,
      height,
      borderColor: red,
    };
    return <span className="spinner" style={styles}></span>;
  }
}

// function Spinner(props) {
//   console.log(props.size);
//   const styles = {
//     width: props.size,
//     height: props.size,
//   };
//   return <span style={styles} className="spinner"></span>;
// }

export default Spinner;
