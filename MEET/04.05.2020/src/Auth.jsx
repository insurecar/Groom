import React, { Component } from "react";
import Login from "./Login";
import Logout from "./Logout";

class Auth extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: true,
    };
  }

  onLogin = () => {
    this.setState({
      isLoggedIn: true,
    });
  };

  onLogout = () => {
    this.setState({
      isLoggedIn: false,
    });
  };

  render() {
    const { isLoggedIn } = this.state;
    if (isLoggedIn) {
      return <Logout onLog={this.onLogout} />;
    }
    return <Login onLogin={this.onLogin} />;
  }
}

export default Auth;
