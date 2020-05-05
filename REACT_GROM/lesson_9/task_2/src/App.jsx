import React, { Component } from "react";
import UserForm from "./UserForm";

class App extends Component {
  createUser = (user) => {
    console.log(user);
  };

  render() {
    return <UserForm handleSubmit={this.createUser} />;
  }
}

export default App;
