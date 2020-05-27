import React, { Component } from "react";

const Logout = ({ onLogout, handleLogout }) => {
  return (
    <button className="btn" onClick={handleLogout}>
      {onLogout}
    </button>
  );
};

export default Logout;
