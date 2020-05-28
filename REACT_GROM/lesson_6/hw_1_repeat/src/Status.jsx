import React, { Component } from "react";
import Online from "./Online";
import Offline from "./Offline";

// class Status extends Component {
//   state = {
//     isOnline: false,
//   };
//   render() {
//     const { isOnline } = this.state;
//     return <div className="status">{isOnline ? <Online /> : <Offline />}</div>;
//   }
// }

const Status = ({ isOnline }) => {
  return <div className="status">{isOnline ? <Online /> : <Offline />}</div>;
};

export default Status;
