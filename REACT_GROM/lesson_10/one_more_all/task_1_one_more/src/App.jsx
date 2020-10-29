import React, { Component } from "react";
import UserMenu from "./UserMenu";
import UserProfile from "./UserProfile";

class Page extends Component {
  state = {
    userData: null,
  };

  componentDidMount() {
    const baseUrl = `https://api.github.com/users/${this.props.userId}`;
    fetch(baseUrl)
      .then((data) => data.json())
      .then((response) =>
        this.setState({
          userData: response,
        })
      );
  }

  render() {
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

export default Page;
