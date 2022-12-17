import React from "react";

const MessageParser = ({ children, actions }) => {
  const parse = (message) => {
    message = message.toLowerCase();

    const hello = ["hi", "hello"];

    const bye = ["thankyou","thank you","bye", "thank you very much", "thanks"];

    const intro = ["who are you", "what do you do"];

    if (hello.some((word) => message.includes(word))) {
      actions.handleHello();
    } else if (bye.some((word) => message.includes(word))) {
      actions.handleBye();
    } else if (intro.some((word) => message.includes(word))) {
      actions.handleIntro();
    } else if (JSON.stringify(message)===JSON.stringify("what is a data structure?")) {
      actions.handleDS();
    } else if (JSON.stringify(message)===JSON.stringify("what is an array?")) {
      actions.handleArray();
    } else if (JSON.stringify(message)===JSON.stringify("what is a linked list?")) {
      actions.handleLinkedList();
    } else if (JSON.stringify(message)===JSON.stringify("what is lifo?")) {
      actions.handleLIFO();
    } else if (JSON.stringify(message)===JSON.stringify("what is a stack?")) {
      actions.handleStack();
    } else if (JSON.stringify(message)===JSON.stringify("what is fifo?")) {
      actions.handleFIFO();
    } else if (JSON.stringify(message)===JSON.stringify("what is a queue?")) {
      actions.handleQueue();
    } else if (JSON.stringify(message)===JSON.stringify("what are binary trees?")) {
      actions.handleBinaryTrees();
    } else if (JSON.stringify(message)===JSON.stringify("what is recursion?")) {
      actions.handleRecursion();
    } else if (JSON.stringify(message)===JSON.stringify("what is oop?")) {
      actions.handleOOP();
    } else if (JSON.stringify(message)===JSON.stringify("what are the concepts in oops?")) {
      actions.handleOopConcept();
    } else if (JSON.stringify(message)===JSON.stringify("what is a binary search tree?")) {
      actions.handleBiSearchTree();
    } else if (JSON.stringify(message)===JSON.stringify("what are double linked lists?")) {
      actions.handleDoubleLL();
    } else if (JSON.stringify(message)===JSON.stringify("what is a graph?")) {
      actions.handleGraph();
    } else if (JSON.stringify(message)===JSON.stringify("what is a deque?")) {
      actions.handleDeque();
    } else if (JSON.stringify(message)===JSON.stringify("which sorting algorithm is the best?")) {
      actions.handleSortingAlgorithm();
    } else if (JSON.stringify(message)===JSON.stringify("what are dynamic data structures?")) {
      actions.handleDDS();
    } else if (JSON.stringify(message)===JSON.stringify("what are the popular languages?")) {
      actions.handleLanguages();
    } else if (JSON.stringify(message)===JSON.stringify("what is javascript?")) {
      actions.handleJavascript();
    } else if (JSON.stringify(message)===JSON.stringify("what is python?")) {
      actions.handlePython();
    } else if (JSON.stringify(message)===JSON.stringify("what is c?")) {
      actions.handleC();
    } else if (JSON.stringify(message)===JSON.stringify("what is c++?")) {
      actions.handleCPP();
    } else if (JSON.stringify(message)===JSON.stringify("what are databases?")) {
      actions.handleDatabases();
    } else if (JSON.stringify(message)===JSON.stringify("what is react?")) {
      actions.handleReactJS();
    } else if (JSON.stringify(message)===JSON.stringify("what is nodejs?")) {
      actions.handleNodeJS();
    } else if (JSON.stringify(message)===JSON.stringify("what is html and css?")) {
      actions.handleHTMLCSS();
    }
    else if (JSON.stringify(message)===JSON.stringify("is java an object oriented programming?")) {
      actions.handleObjectOriented();
    }
    else if (JSON.stringify(message)===JSON.stringify("difference between java and flutter?")) {
      actions.handleJavaFlutter();
    }
    
    else{
      actions.handleUnknown();
    }
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          parse: parse,
          actions: {},
        });
      })}
    </div>
  );
};

export default MessageParser;
