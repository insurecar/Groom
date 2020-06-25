import React from "react";

const NavLink = ({ children }) => {
  return (
    <div className="navlink">
      <button className="flights__navigation_btn">{children}</button>
    </div>
  );
};

export default NavLink;
