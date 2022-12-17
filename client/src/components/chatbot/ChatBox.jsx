import React from "react";
import Chatbot from "react-chatbot-kit";
import "react-chatbot-kit/build/main.css";

import MessageParser from "./MessageParser.js";
import config from "./config.js";
import ActionProvider from "./ActionProvider.js";

const ChatBox = () => {
  return (
    <div className="chatbox">
      <Chatbot
        config={config}
        messageParser={MessageParser}
        actionProvider={ActionProvider}
      />
    </div>
  );
};

export default ChatBox;
