import React, { Component } from "react";

class ColorPicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
    };
  }

  setTitle = (title) => {
    this.setState({
      title,
    });
  };

  reset = () => {
    this.setState({
      title: "",
    });
  };

  render() {
    return (
      <div>
        <div className="picker__title">{this.state.title}</div>
        <div>
          <button
            className="picker__button picker__button_coral"
            onMouseEnter={() => this.setTitle("Coral")}
            onMouseOut={this.reset}
          ></button>
          <button
            className="picker__button picker__button_aqua"
            onMouseEnter={() => this.setTitle("Aqua")}
            onMouseOut={this.reset}
          ></button>
          <button
            className="picker__button picker__button_bisque"
            onMouseEnter={() => this.setTitle("Bisque")}
            onMouseOut={this.reset}
          ></button>
        </div>
      </div>
    );
  }
}

export default ColorPicker;

// import React, { Component } from "react";

// class ColorPicker extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       title: "",
//     };
//   }
//   setTitle = (colorName) => {
//     this.setState({
//       title: colorName,
//     });
//   };

//   reset = () => {
//     this.setState({
//       title: "",
//     });
//   };

//   render() {
//     return (
//       <div>
//         <div className="picker__title">{this.state.title}</div>
//         <div>
//           <button
//             className="picker__button picker__button_coral"
//             onMouseEnter={() => this.setTitle("Coral")}
//             onMouseOut={this.reset}
//           />
//           <button
//             className="picker__button picker__button_aqua"
//             onMouseEnter={() => this.setTitle("Aqua")}
//             onMouseOut={this.reset}
//           />
//           <button
//             className="picker__button picker__button_bisque"
//             onMouseEnter={() => this.setTitle("Bisque")}
//             onMouseOut={this.reset}
//           />
//         </div>
//       </div>
//     );
//   }
// }

// export default ColorPicker;
