import React, { Component } from "react";
import User from "./User";

class UsersList extends Component {
  state = {
    sorting: false,
  };

  onToggleSort = () => {
    const newSorting = this.state.sorting == "ASC" ? "DESC" : "ASC";
    console.log(this.state.sorting);
    this.setState({
      sorting: newSorting,
    });
  };

  render() {
    let sortR = this.props.users
      ? this.props.users
          .slice()
          .sort((a, b) =>
            this.state.sorting === "ASC" ? a.age - b.age : b.age - a.age
          )
      : this.props.users;

    return (
      <div>
        <ul>
          {sortR.map((user) => (
            <User {...user} key={user.id} />
          ))}
        </ul>
        <button className="btn" onClick={this.onToggleSort}>
          {this.state.sorting || "PUSH"}
        </button>
      </div>
    );
  }
}

export default UsersList;
