import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const url = "https://api.github.com/users";

const User = () => {
  const [userData, setUserData] = useState();
  const { userId } = useParams();

  useEffect(() => {
    axios(`${url}/${userId}`).then((userData) => setUserData(userData));
  }, [userId]);

  if (!userData) return null;

  const { avatar_url, name, location } = userData.data;

  return (
    <div className="user">
      <img alt="User Avatar" src={avatar_url} className="user__avatar" />
      <div className="user__info">
        <span className="user__name">{name}</span>
        <span className="user__location">{location}</span>
      </div>
    </div>
  );
};

export default User;
