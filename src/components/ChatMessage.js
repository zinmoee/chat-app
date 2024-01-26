import React from "react";

const ChatMessage = ({ sender, text, isOwnMessage }) => {
  return (
    <div
      style={{
        textAlign: isOwnMessage ? "right" : "left",
        marginBottom: "8px",
      }}
    >
      <strong>{sender}</strong>
      <br />
      {text}
    </div>
  );
};

export default ChatMessage;
