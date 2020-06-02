import React, { Component } from "react";

const baseURL = `https://api.github.com/users`;

class User extends Component {
  state = {
    user: null,
  };

  componentDidMount() {
    console.log("==>componentDidMount");
    console.log(this.props);

    this.fetchUser(this.props.match.params.userId);
  }

  componentDidUpdate(prevProps) {
    console.log(prevProps);

    if (this.props.match.params.userId != prevProps.match.params.userId) {
      this.fetchUser(this.props.match.params.userId);
    }
  }

  fetchUser = (userId) => {
    fetch(`${baseURL}/${userId}`)
      .then((response) => response.json())
      .then((data) =>
        this.setState({
          user: data,
        })
      );
  };

  render() {
    if (!this.state.user) {
      return null;
    }
    const { name, location, avatar_url } = this.state.user;
    return (
      <div className="user">
        <img src={avatar_url} className="user__avatar" alt="ava" />
        <div className="user__info">
          <span className="user__name">{name}</span>
          <span className="user__location">{location}</span>
        </div>
      </div>
    );
  }
}

export default User;
