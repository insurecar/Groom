import React from "react";

const Message = ({ text }) =>
  text ? <div className="message">{text}</div> : null;

export default Message;
