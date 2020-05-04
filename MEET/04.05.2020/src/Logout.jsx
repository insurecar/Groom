import React from "react";

function Logout({ onLog }) {
  return (
    <button className="logout btn" onClick={onLog}>
      Logout
    </button>
  );
}

export default Logout;
