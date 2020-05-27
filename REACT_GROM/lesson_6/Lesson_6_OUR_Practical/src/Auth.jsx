import React, { Component } from "react";
import Greeting from "./Greeting";
import Logout from "./Logout";
import Login from "./Login";

class Auth extends Component {
  state = {
    isLoggedIn: false,
  };

  handleLogin = () => {
    console.log("LOGIN");
    this.setState({
      isLoggedIn: true,
    });
  };

  handleLogout = () => {
    console.log("LOGOUT");
    this.setState({
      isLoggedIn: false,
    });
  };

  render() {
    return (
      <div className="panel">
        <Greeting isLoggedIn={this.state.isLoggedIn} />

        {this.state.isLoggedIn ? (
          <Logout onLogout="Logout" handleLogout={this.handleLogout} />
        ) : (
          <Login onLogin="Login" handleLogin={this.handleLogin} />
        )}
      </div>
    );
  }
}

export default Auth;
