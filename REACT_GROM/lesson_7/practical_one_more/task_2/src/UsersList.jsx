import React, { Component } from "react";
import User from "./User";

class UserList extends Component {
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
    let usersList = this.props.users
      ? this.props.users
          .slice()
          .sort((a, b) =>
            this.state.sorting === "asc" ? a.age - b.age : b.age - a.age
          )
      : this.props.users;

    return (
      <div>
        <button className="btn" onClick={this.toggleSorting}>
          {this.state.sorting || "TRY"}
        </button>
        <ul className="users">
          {usersList.map((user) => (
            <User {...user} key={user.age + user.name} />
          ))}
        </ul>
      </div>
    );
  }
}

// const UserList = ({ users }) => {
//   state = {
//     sorting: null,
//   };

//   return (
//     <div>
//       <button className="btn">-</button>
//       <ul className="users">
//         {users.map((user) => (
//           <User {...user} key={user.age + user.name} />
//         ))}
//       </ul>
//     </div>
//   );
// };

export default UserList;
