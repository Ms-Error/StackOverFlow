class MessageParser {
  constructor(actionProvider, state) {
    this.actionProvider = actionProvider;
  
  }

  parse(message) {
    const lowerCaseMessage = message.toLowerCase();

    if (lowerCaseMessage.includes("hello")) {
      this.actionProvider.greet();
    }
       else{
        this.actionProvider.handleUnknown();
       }
  }
}

export default MessageParser;
