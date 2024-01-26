import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const ChatInput = ({ onSendMessage }) => {
  const [message, setMessage] = useState("");

  const sendMessage = () => {
    if (message.trim() === "") {
      return;
    }

    onSendMessage(message);
    setMessage("");
  };

  return (
    <Form.Group className="msger-inputarea">
      <Form.Control
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
        autoFocus={true}
        placeholder="Enter your message..."
        className="msger-input"
      />
      <Button className="msger-send-btn" onClick={sendMessage}>
        Send
      </Button>
    </Form.Group>
  );
};

export default ChatInput;
