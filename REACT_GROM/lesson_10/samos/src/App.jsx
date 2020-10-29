import React, { Component } from "react";
import UserMenu from "./UserMenu";
import UserProfile from "./UserProfile";

class App extends Component {
  state = {
    userData: null,
  };

  componentDidMount() {
    const baseUrl = `https://api.github.com/users/${this.props.userName}`;
    fetch(baseUrl)
      .then((data) => data.json())
      .then((response) => {
        console.log(response);
        this.setState({
          userData: response,
        });
      });
  }

  render() {
    if (!this.state.userData) {
      return null;
    }

    return (
      <div className="page">
        <header className="header">
          <UserMenu userData={this.state.userData} />
        </header>
        <UserProfile userData={this.state.userData} />
      </div>
    );
  }
}

export default App;
