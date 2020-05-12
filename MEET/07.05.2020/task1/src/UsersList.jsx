import React, { Component } from "react";
import Pagination from "./Pagination";

class UsersList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentPage: 0,
    };
  }

  goPrev = () => {
    const { currentPage } = this.state;
    this.setState({
      currentPage: currentPage - 1,
    });
  };

  goNext = () => {
    const { currentPage } = this.state;
    this.setState({
      currentPage: currentPage + 1,
    });
  };

  render() {
    const { users } = this.props;
    const { currentPage } = this.state;

    return (
      <div>
        <Pagination
          goPrev={this.goPrev}
          goNext={this.goNext}
          currentPage={currentPage}
          totalItems={10}
          itemsPerPage={3}
        />
        <ul>
          {users.map((user) => (
            <li className="user" key={user.id}>
              <span className="user__name">{user.name}</span>
              <span className="user__age">{user.age}</span>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default UsersList;
