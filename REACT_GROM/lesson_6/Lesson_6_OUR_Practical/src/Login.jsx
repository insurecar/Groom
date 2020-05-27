import React, { Component } from "react";

const Login = ({ onLogin, handleLogin }) => {
  return (
    <button className="btn" onClick={handleLogin}>
      {onLogin}
    </button>
  );
};

export default Login;
