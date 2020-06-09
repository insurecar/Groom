import React, { Component } from "react";
import ThemedButton from "./ThemedButton";

class App extends Component {
  render() {
    return (
      <div>
        <ThemedButton>Dynamic theme</ThemedButton>
        <ThemedButton>Default theme</ThemedButton>
      </div>
    );
  }
}

export default App;
