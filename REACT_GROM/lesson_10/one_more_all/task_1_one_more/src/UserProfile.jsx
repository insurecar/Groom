import React from "react";

const UserProfile = (props) => {
  if (!props.userData) {
    return null;
  }
  const { avatar_url, name, location } = props.userData;

  return (
    <div className="user">
      <img src={avatar_url} alt="user photo" className="user__avatar" />
      <div className="user__info">
        <span className="user__name">{name}</span>
        <span className="user__location">{location}</span>
      </div>
    </div>
  );
};

export default UserProfile;
