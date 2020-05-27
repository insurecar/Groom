import React, { Component } from "react";

const Mailbox = ({ message }) => {
  //   const span =
  //     message > 0 ? <span className="mailbox__count">{message} </span> : null;

  return (
    <div className="mailbox">
      <span className="mailbox__text">messages </span>
      {message}
    </div>
  );
};

export default Mailbox;
