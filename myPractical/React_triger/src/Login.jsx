import React from "react";

function Login(props) {
  console.log(props);
  return (
    <button className="login btn" onClick={props.onLogin}>
      Login
    </button>
  );
}

export default Login;
