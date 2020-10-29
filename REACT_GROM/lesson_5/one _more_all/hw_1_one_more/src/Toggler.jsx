import React, { Component } from "react";

class Toggler extends Component {
  constructor(props) {
    super(props);
    this.state = {
      togg: true,
    };
  }

  handleClick = () => {
    this.setState({
      togg: !this.state.togg,
    });
  };

  render() {
    return (
      <button onClick={this.handleClick} className="toggler">
        {this.state.togg ? "On" : "Off"}
      </button>
    );
  }
}

export default Toggler;

// import React, { Component } from "react";

// class Toggle extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       isToggleOn: false,
//     };
//   }
//   handleClick = () => {
//     this.setState({
//       isToggleOn: !this.state.isToggleOn,
//     });
//   };
//   render() {
//     return (
//       <div onClick={this.handleClick} className="toggler">
//         {this.state.isToggleOn ? "On" : "Off"}
//       </div>
//     );
//   }
// }

// export default Toggle;
