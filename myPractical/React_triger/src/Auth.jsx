import React, { Component } from "react";
import Login from "./Login";
import Logout from "./Logout";
import Spinner from "./Spinner";

class Auth extends Component {
  // constructor(props) {
  //   super(props);

  state = {
    isLoggedIn: true,
    isLoading: false,
  };
  // }

  onIn = () => {
    this.setState({
      isLoggedIn: true,
    });
  };

  onOut = () => {
    this.setState({
      isLoggedIn: false,
    });
  };

  render() {
    const { isLoggedIn } = this.state;

    if (isLoggedIn) {
      return <Spinner size={36} borderColor={"red"} />;
    }
    return <Login onLogin={this.onIn} />;
  }
}

export default Auth;
