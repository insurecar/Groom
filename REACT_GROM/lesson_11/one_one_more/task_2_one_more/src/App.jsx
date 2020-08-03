import React, { Component } from "react";
import Dialog from "./Dialog";

class App extends Component {
  state = {
    isOpen: false,
  };

  hideDiaolog = () => {
    this.setState({
      isOpen: false,
    });
  };

  showDiaolog = () => {
    this.setState({
      isOpen: true,
    });
  };

  render() {
    return (
      <div className="app">
        <button className="btn" onClick={this.showDiaolog}>
          Show
        </button>
        <Dialog
          isOpen={this.state.isOpen}
          onClose={this.hideDiaolog}
          title="some title"
        >
          <p>Some text</p>
        </Dialog>
      </div>
    );
  }
}

export default App;
