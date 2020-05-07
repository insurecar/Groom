import React from "react";

const UsersList = ({ users }) => {
  return (
    <ul>
      {users.map((user) => (
        <li className="user" key={user.id}>
          <span className="user__name">{user.name}</span>
          <span className="user__age">{user.age}</span>
        </li>
      ))}
    </ul>
  );
};

export default UsersList;
