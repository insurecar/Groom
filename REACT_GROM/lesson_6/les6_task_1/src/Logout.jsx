import React from "react";

const Logout = ({ goIn }) => {
  return (
    <button className="btn logout" onClick={goIn}>
      Logout
    </button>
  );
};
export default Logout;
