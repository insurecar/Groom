import React, { Component } from "react";
import { User } from "./User";

export class UserList extends Component {
  state = {
    sorting: null,
  };
  toggleSorting = () => {
    const newSorting = this.state.sorting === "asc" ? "desc" : "asc";
    this.setState({
      sorting: newSorting,
    });
  };

  render() {
    this.state.sorting
      ? this.props.users.sort((a, b) =>
          this.state.sorting === "asc" ? a.age - b.age : b.age - a.age
        )
      : this.props.users;

    return (
      <div>
        <button className="btn" onClick={this.toggleSorting}>
          {this.state.sorting || "choose"}
        </button>
        <ul className="users">
          {this.props.users.map((user) => (
            <User {...user} key={user.id} />
          ))}
        </ul>
      </div>
    );
  }
}
