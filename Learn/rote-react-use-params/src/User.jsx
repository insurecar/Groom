import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";

const User = () => {
  const url = useParams();
  const [userName, setUserName] = useState(null);
  const [userLocation, setUserLocation] = useState(null);
  const [img, setImg] = useState();

  useEffect(() => {
    axios.get(`https://api.github.com/users/${userName}`).then((response) => {
      setUserName(response.data.login);
      console.log(userName);
    });
  }, [url]);

  return (
    <div className="user">
      <img alt="User Avatar" className="user__avatar" />
      <div className="user__info">
        <span className="user__name">GitHub</span>
        <span className="user__location">San Francisco,CA</span>
      </div>
    </div>
  );
};

export default User;
