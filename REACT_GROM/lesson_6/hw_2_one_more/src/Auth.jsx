import React, { Component } from "react";
import Login from "./Login";
import Logout from "./Logout";
import Spinner from "./Spinner";

class Auth extends Component {
  state = {
    isLoggedIn: true,
    isSpinner: false,
  };

  handleLogin = () => {
    this.setState({
      isLoggedIn: false,
      isSpinner: true,
    });

    setTimeout(() => {
      this.setState({
        isSpinner: false,
      });
    }, 2000);
  };

  handleLogout = () => {
    this.setState({
      isLoggedIn: true,
    });
  };

  render() {
    const { isLoggedIn, isSpinner } = this.state;

    if (isLoggedIn) {
      return <Login onLogin={this.handleLogin} />;
    } else {
      if (isSpinner) {
        return <Spinner size={"32px"} />;
      } else {
        return <Logout onLogout={this.handleLogout} />;
      }
    }
  }
}

export default Auth;
