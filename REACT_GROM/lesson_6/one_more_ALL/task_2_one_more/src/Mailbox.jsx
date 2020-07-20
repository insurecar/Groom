import React from "react";

const Mailbox = ({ unreadmessage }) => {
  return (
    <div className="mailbox">
      <span className="mailbox__text">Messages</span>
      {unreadmessage.length > 0 && (
        <span className="mailbox__count">{unreadmessage.length}</span>
      )}
    </div>
  );
};

export default Mailbox;
