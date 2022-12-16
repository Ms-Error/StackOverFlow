import { createChatBotMessage } from 'react-chatbot-kit';

const botName = "StackBot";

const config = { 
  initialMessages: [createChatBotMessage(`Hello I am ${botName}`)],
  botName: botName,
  customStyles: {
    botMessageBox: {
      backgroundColor: '#ef8236',
    },
    chatButton: {
      backgroundColor: '#ef8236',
    },
  }
};

export default config;