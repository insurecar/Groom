import React from "react";

function Logout({ onLogout }) {
  return (
    <button className="logout btn" onClick={onLogout}>
      Logout
    </button>
  );
}

export default Logout;
