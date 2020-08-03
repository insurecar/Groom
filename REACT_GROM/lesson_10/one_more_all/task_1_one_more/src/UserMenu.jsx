import React from "react";

const UserMenu = ({ userData }) => {
  if (!userData) {
    return null;
  }
  const { name, avatar_url } = userData;
  return (
    <div className="menu">
      <span className="menu__greeting">{name}</span>
      <img src="" alt="User Avatar" src={avatar_url} className="menu__avatar" />

      <span></span>
    </div>
  );
};

export default UserMenu;
