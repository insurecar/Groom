import React, { Component } from "react";
import Login from "./Login";
import Logout from "./Logout";
import Spinner from "./Spinner";

class Auth extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false,
      isLoading: false,
    };
  }

  onLogin = () => {
    setTimeout(() => {
      this.setState({
        isLoggedIn: true,
        isLoading: false,
      });
    }, 2000);

    this.setState({
      isLoading: true,
    });
  };

  onLogout = () => {
    this.setState({
      isLoggedIn: false,
    });
  };

  render() {
    const { isLoggedIn, isLoading } = this.state;

    if (isLoading) {
      return <Spinner size={26} />;
    }

    if (isLoggedIn) {
      return <Logout onLogout={this.onLogout} />;
    }
    return <Login onLogin={this.onLogin} />;
  }
}

export default Auth;
