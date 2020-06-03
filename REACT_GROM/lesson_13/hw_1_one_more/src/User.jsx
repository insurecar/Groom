import React, { Component } from "react";

const baseUrl = "https://api.github.com/users";

class User extends Component {
  state = {
    user: null,
  };

  componentDidMount() {
    console.log(this.props);

    this.fetchUser(this.props.match.params.userId);
  }

  componentDidUpdate(prevProps) {
    if (this.props.match.params.userId != prevProps.match.params.userId) {
      this.fetchUser(this.props.match.params.userId);
    }
  }

  fetchUser = async (userId) => {
    await fetch(`${baseUrl}/${userId}`)
      .then((response) => response.json())
      .then((data) =>
        this.setState({
          user: data,
        })
      );
  };

  render() {
    if (!this.state.user) {
      return "";
    }
    const { name, avatar_url, location, node_id } = this.state.user;

    return (
      <div className="user">
        <img alt="User Avatar" src={avatar_url} className="user__avatar" />
        <div className="user__info">
          <span className="user__name">{name}</span>
          <span className="user__location">{location}</span>
          <span className="user__location">{node_id}</span>
        </div>
      </div>
    );
  }
}

export default User;
