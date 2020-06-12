import React, { Component, useState } from "react";

class App extends Component {
 state

  render(){
  return (
    <div>
      <p>Ви натиснули {count} разів</p>
      <button onClick={() => setCount(count + 1)}>Натисни мене</button>
    </div>
  );
}};

export default App;
