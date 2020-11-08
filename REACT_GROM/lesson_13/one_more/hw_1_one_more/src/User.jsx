import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const User = () => {
  const { usersName } = useParams();
  const [user, setUser] = useState(usersName);

  useEffect(() => {
    axios.get(`https://api.github.com/users/${usersName}`).then((data) => {
      setUser(data);
    });
  }, [usersName]);

  const readyUser = user.status ? (
    <div className="user">
      <img alt="User Avatar" src={user.data.avatar_url} className="user__avatar" />
      <div className="user__info">
        <span className="user__name">{user.data.name}</span>
        <span className="user__location">{user.data.location}</span>
      </div>
    </div>
  ) : null;

  return readyUser;
};

export default User;
