import React, { Component } from "react";
import User from "./User";

class UsersList extends Component {
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
    console.log(this.props.use);
    this.state.sorting
      ? this.props.use.sort((a, b) =>
          this.state.sorting === "asc" ? a.age - b.age : b.age - a.age
        )
      : this.props.use;
    return (
      <div>
        <button className="btn" onClick={this.toggleSorting}>
          {this.state.sorting || "fcvbh"}
        </button>
        <ul className="users">
          {this.props.use.map((user) => (
            <User key={Math.random()} {...user} />
          ))}
        </ul>
      </div>
    );
  }
}

export default UsersList;
