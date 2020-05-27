import React, { Component } from "react";
import Message from "./Message";

const text1 = "Hello React";
const text2 = "Hello JS";

class Page extends Component {
  state = {
    text: null,
  };

  setText = (text) => {
    this.setState({
      text,
    });
  };

  render() {
    const { text } = this.state;
    return (
      <div className="page">
        <Message text={text} />
        <div className="actions">
          <button className="btn" onClick={() => this.setText(text1)}>
            Text 1
          </button>
          <button className="btn" onClick={() => this.setText(text2)}>
            Text 2
          </button>
          <button className="btn" onClick={() => this.setText("")}>
            Clear
          </button>
        </div>
      </div>
    );
  }
}

export default Page;
