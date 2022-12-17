class ActionProvider {
  constructor(createChatBotMessage, setStateFunc) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
  }

  greet() {
    const greetingMessage = this.createChatBotMessage("Hi, friend.");
    this.updateChatbotState(greetingMessage);
  }

  handleJavascriptList = () => {
    const message = this.createChatBotMessage(
      "Clarify your doubt by clicking on the below options",
      {
        widget: "javascriptLinks",
      }
    );

    this.updateChatbotState(message);
  };
  handleReactList = () => {
    const message = this.createChatBotMessage(
      "Clarify your doubt by clicking on the below options",
      {
        widget: "reactLinks",
      }
    );

    this.updateChatbotState(message);
  };
  handleJavaList = () => {
    const message = this.createChatBotMessage(
      "Clarify your doubt by clicking on the below options",
      {
        widget: "javaLinks",
      }
    );

    this.updateChatbotState(message);
  };
  handleCppList = () => {
    const message = this.createChatBotMessage(
      "Clarify your doubt by clicking on the below options",
      {
        widget: "cppLinks",
      }
    );

    this.updateChatbotState(message);
  };
  handlePythonList = () => {
    const message = this.createChatBotMessage(
      "Clarify your doubt by clicking on the below options",
      {
        widget: "pythonLinks",
      }
    );

    this.updateChatbotState(message);
  };
 
  handleCList = () => {
    const message = this.createChatBotMessage(
      "Clarify your doubt by clicking on the below options",
      {
        widget: "cLinks",
      }
    );

    this.updateChatbotState(message);
  };
  handleHtmlList = () => {
    const message = this.createChatBotMessage(
      "Clarify your doubt by clicking on the below options",
      {
        widget: "htmlLinks",
      }
    );

    this.updateChatbotState(message);
  };
  handleCssList = () => {
    const message = this.createChatBotMessage(
      "Clarify your doubt by clicking on the below options",
      {
        widget: "cssLinks",
      }
    );

    this.updateChatbotState(message);
  };
  handleUnknown = () => {
    const message = this.createChatBotMessage(
      "Sorry I dont have an Answer",
      
    );

    this.updateChatbotState(message);
  };
  updateChatbotState(message) {
    // NOTE: This function is set in the constructor, and is passed in      // from the top level Chatbot component. The setState function here     // actually manipulates the top level state of the Chatbot, so it's     // important that we make sure that we preserve the previous state.

    this.setState((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, message],
    }));
  }
}

export default ActionProvider;
