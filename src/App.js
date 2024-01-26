import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  enterChat,
  loadMessages,
  sendMessage as sendMessageAction,
} from "./redux/actions/chatActions";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ChatMessage from "./components/ChatMessage";
import ChatInput from "./components/ChatInput";

const ChatApp = () => {
  const dispatch = useDispatch();
  const { name, messages } = useSelector((state) => state.chat);
  const [tempName, setTempName] = useState("");

  useEffect(() => {
    const storedName = localStorage.getItem("chatUserName");
    if (storedName) {
      dispatch(enterChat(storedName));
      dispatch(loadMessages());
    }

    window.addEventListener("storage", handleLocalStorageChange);

    return () => {
      window.removeEventListener("storage", handleLocalStorageChange);
    };
  }, [dispatch]);

  const handleLocalStorageChange = (event) => {
    if (event.key === "chatMessagesUpdate") {
      dispatch(loadMessages());
    }
  };

  const handleEnterChat = () => {
    dispatch(enterChat(tempName));
    dispatch(loadMessages());
  };

  const sendMessage = (message) => {
    dispatch(sendMessageAction(name, message));
    localStorage.setItem("chatMessagesUpdate", Date.now().toString());
  };

  const renderChatContent = () => (
    <Col xs={12} md={{ span: 6, offset: 3 }} className="msger">
      <header class="msger-header">
        <div class="msger-header-title">
          <i class="fas fa-comment-alt"></i> SimpleChat
        </div>
        <div class="msger-header-options">
          <span><i class="fas fa-cog"></i></span>
        </div>
      </header>
      <div
        className="msger-chat border rounded p-3 mt-2"
      >
        {messages.map((msg, index) => (
          <ChatMessage
            key={index}
            sender={msg.sender}
            text={msg.text}
            isOwnMessage={msg.sender === name}
          />
        ))}
      </div>
      <ChatInput onSendMessage={sendMessage} />
    </Col>
  );

  const renderEnterChat = () => (
    <Col xs={12} md={{ span: 6, offset: 3 }}>
      <Form.Group className="mb-3 name-inputarea">
        <Form.Control
          type="text"
          placeholder="Enter your name"
          onChange={(e) => setTempName(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleEnterChat()}
          autoFocus={true}
          className="name-input"
        />
      </Form.Group>
      <Button className="enter-chat-btn" onClick={handleEnterChat}>
        Enter Chat
      </Button>
    </Col>
  );

  return (
    <Container className="mt-3">
      <Row>{!name ? renderEnterChat() : renderChatContent()}</Row>
    </Container>
  );
};

export default ChatApp;
