import React from "react";

const User = ({ ...users }) => {
  return (
    <li className="user">
      <span className="user__name">{users.name}</span>
      <span className="user__age">{users.age}</span>
    </li>
  );
};

export default User;
