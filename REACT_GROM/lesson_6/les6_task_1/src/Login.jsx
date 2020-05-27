import React from "react";

const Login = ({ goOut }) => {
  return (
    <button className="btn login" onClick={goOut}>
      Login
    </button>
  );
};

export default Login;
