import React from "react";

const Login = ({ onLogin }) => {
  return (
    <button className="login btn" onClick={onLogin}>
      Login
    </button>
  );
};

export default Login;
// import React from 'react';

// const Login = props => {
//   return (
//     <button
//       className="login btn"
//       onClick={props.onLogin}
//     >
//       Login
//     </button>
//   )
// }

// export default Login;
