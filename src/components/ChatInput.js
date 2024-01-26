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
    <Form.Group>
      <Form.Control
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type your message..."
      />
      <Button variant="success" onClick={sendMessage}>
        Send Message
      </Button>
    </Form.Group>
  );
};

export default ChatInput;
