import React from "react";
import "../styles/Message.css";

const ChatMessage = ({ sender, text, datetime, isOwnMessage }) => {
  const getTime = () => {
    return new Intl.DateTimeFormat("default", {
      hour12: true,
      hour: "numeric",
      minute: "numeric",
    }).format(Date.parse(datetime));
  };
  return (
    <main className={`msg ${isOwnMessage ? "right-msg" : "left-msg"}`}>
      <div className="msg-img"></div>
      <div className="msg-bubble">
        <div className="msg-info">
          <div className="msg-info-name">{sender}</div>
          <div className="msg-info-time">{getTime()}</div>
          <div className="msg-text">{text}</div>
        </div>
      </div>
    </main>
  );
};

export default ChatMessage;
