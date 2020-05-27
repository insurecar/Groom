import React, { Component } from "react";
import Greeting from "./Greeting";
import Logout from "./Logout";
import Login from "./Login";

class Auth extends Component {
  state = {
    isLoggedIn: false,
  };

  handleLogin = () => {
    this.setState({
      isLoggedIn: true,
    });
  };

  handleLogout = () => {
    this.setState({
      isLoggedIn: false,
    });
  };

  render() {
    const { isLoggedIn } = this.state;
    return (
      <div className="panel">
        <Greeting isLog={isLoggedIn} />
        {isLoggedIn ? (
          <Logout goIn={this.handleLogout} />
        ) : (
          <Login goOut={this.handleLogin} />
        )}
      </div>
    );
  }
}

export default Auth;
