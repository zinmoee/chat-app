import React from "react";
import "../styles/Message.css";

const ChatMessage = ({ sender, text, isOwnMessage }) => {
  return (
    <main className={`msg ${isOwnMessage ? 'right-msg' : 'left-msg'}`}>
      <div
        className="msg-img"
      ></div>
      <div className="msg-bubble">
        <div class="msg-info">
          <div class="msg-info-name">{sender}</div>
          <div class="msg-info-time">12:45</div>
          <div class="msg-text">{text}</div>
        </div>
      </div>
    </main>
  );
};

export default ChatMessage;
