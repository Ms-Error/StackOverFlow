import React from 'react';

const MessageParser = ({ children, actions }) => {
  const parse = (message) => {

    message = message.toLowerCase()
    
    const hello = ["hi", "hello"]
    
    const bye = ["thank you", "thank you very much", "thanks"]

    const intro = ["who are you", "what do you do"]
    
    if(hello.some(word => message.includes(word)))
    {
      actions.handleHello()
    }
    else if(bye.some(word => message.includes(word)))
    {
      actions.handleBye()
    }
    else if(intro.some(word => message.includes(word)))
    {
      actions.handleIntro()
    }
    else if(message.includes("what is a data structure"))
    {
      actions.handleDS()
    }
     else if(message.includes("data structure"))
    {
      actions.handleDS()
    }
    else if(message.includes("what is an array"))
    {
      actions.handleArray()
    }
    else if(message.includes("array"))
    {
      actions.handleArray()
    }
    else if(message.includes("what is a linked list"))
    {
      actions.handleLinkedList()
    }
    else if(message.includes("linked list"))
    {
      actions.handleLinkedList()
    }
    else if(message.includes("what is LIFO"))
    {
      actions.handleLIFO()
    }
      else if(message.includes("LIFO"))
    {
      actions.handleLIFO()
    }
    else if(message.includes("what is a stack"))
    {
      actions.handleStack()
    }
    else if(message.includes("stack"))
    {
      actions.handleStack()
    }
    else if(message.includes("what is FIFO"))
    {
      actions.handleFIFO()
    }
    else if(message.includes("FIFO"))
    {
      actions.handleFIFO()
    }
    else if(message.includes("what is a queue"))
    {
      actions.handleQueue()
    }
    else if(message.includes("queue"))
    {
      actions.handleQueue()
    }
    else if(message.includes("what are binary trees"))
    {
      actions.handleBinaryTrees()
    }
    else if(message.includes("binary trees"))
    {
      actions.handleBinaryTrees()
    }
    else if(message.includes("what is recursion"))
    {
      actions.handleRecursion()
    }
    else if(message.includes("recursion"))
    {
      actions.handleRecursion()
    }
    else if(message.includes("what is OOP"))
    {
      actions.handleOOP()
    }
    else if(message.includes("OOP"))
    {
      actions.handleOOP()
    }
    else if(message.includes("what are the concepts in OOPs"))
    {
      actions.handleOopConcept()
    }
    else if(message.includes("what is a binary search tree"))
    {
      actions.handleBiSearchTree()
    }
    else if(message.includes("binary search tree"))
    {
      actions.handleBiSearchTree()
    }
    else if(message.includes("what are double linked lists"))
    {
      actions.handleDoubleLL()
    }
    else if(message.includes("what is a graph"))
    {
      actions.handleGraph()
    }
    else if(message.includes("graph"))
    {
      actions.handleGraph()
    }
    else if(message.includes("what is a deque"))
    {
      actions.handleDeque()
    }
    else if(message.includes("deque"))
    {
      actions.handleDeque()
    }
    else if(message.includes("which sorting algorithm is the best"))
    {
      actions.handleSortingAlgorithm()
    }
    else if(message.includes("what are dynamic data structures"))
    {
      actions.handleDDS()
    }
    else if(message.includes("what are the popular languages"))
    {
      actions.handleLanguages()
    }
    else if(message.includes("what is javascript"))
    {
      actions.handleJavascript()
    }
    else if(message.includes("javascript"))
    {
      actions.handleJavascript()
    }
    else if(message.includes("what is python"))
    {
      actions.handlePython()
    }    
    else if(message.includes("python"))
    {
      actions.handlePython()
    }  
      else if(message.includes("what is c++"))
    {
      actions.handleCPP()
    }    
    else if(message.includes("c++"))
    {
      actions.handleCPP()
    }      
    else if(message.includes("what is c"))
    {
      actions.handleC()
    }    
    else if(message.includes("c"))
    {
      actions.handleC()
    }    
  
    else if(message.includes("what are databases"))
    {
      actions.handleDatabases()
    }    
    else if(message.includes("what is reactjs"))
    {
      actions.handleReactJS()
    }
    else if(message.includes("reactjs"))
    {
      actions.handleReactJS()
    }
    else if(message.includes("react"))
    {
      actions.handleReactJS()
    }
    else if(message.includes("what is nodejs"))
    {
      actions.handleNodeJS()
    }
    else if(message.includes("nodejs"))
    {
      actions.handleNodeJS()
    }
    else if(message.includes("what is html and css"))
    {
      actions.handleHTMLCSS()
    }
    else if(message.includes("html"))
    {
      actions.handleHTML()
    }
    else if(message.includes("css"))
    {
      actions.handleCSS()
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