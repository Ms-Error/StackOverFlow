import React from 'react';

const ActionProvider = ({ createChatBotMessage, setState, children }) => {
  
  const handleHello = () => {
    const botMessage = createChatBotMessage('Hello. Nice to meet you.');

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };
  const handleBye = () => {
    const botMessage = createChatBotMessage('Thank you for using me. Have a great day!');

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };
  const handleIntro = () => {
    const botMessage = createChatBotMessage('I am Stack Overflow bot. I am here to answer your questions');

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };
  const handleDS = () => {
    const botMessage = createChatBotMessage('A data structure is a storage format that defines the way data is stored, organized, and manipulated. Some popular data structures are Arrays, Trees, and Graphs.');

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };
  const handleArray = () => {
    const botMessage = createChatBotMessage('An array is commonly referred to as a collection of items stored at contiguous memory locations. Items stored are of the same type. It organizes data so that a related set of values can be easily sorted or searched.');

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };
  const handleLinkedList = () => {
    const botMessage = createChatBotMessage('Like an array, a linked list refers to a linear data structure in which the elements are not necessarily stored in a contiguous manner. It is basically a sequence of nodes, each node points towards the next node forming a chain-like structure.');

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };
  const handleStack = () => {
    const botMessage = createChatBotMessage('A stack refers to a linear data structure performing operations in a LIFO (Last In First Out) order. In a stack, elements can only be accessed, starting from the topmost to the bottom element.');

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };
  const handleLIFO = () => {
    const botMessage = createChatBotMessage('LIFO is an abbreviation for Last In First Out. It is a way of accessing, storing and retrieving data. It extracts the data that was stored last first.');

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };
  const handleFIFO = () => {
    const botMessage = createChatBotMessage('FIFO stands for First In First Out. It is a way of accessing, storing and retrieving data. The data that was stored first is extracted first.');

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };
  const handleQueue = () => {
    const botMessage = createChatBotMessage('A queue refers to a linear data structure that performs operations in a FIFO order. In a queue, the least recently added elements are removed first as opposed to a stack. ');

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };
  const handleBinaryTrees = () => {
    const botMessage = createChatBotMessage('A binary tree is an extension of the linked list structure where each node has at most two children. A binary tree has two nodes at all times, a left node and a right node.');

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };
  const handleRecursion = () => {
    const botMessage = createChatBotMessage('Recursion refers to a function calling itself based on a terminating condition. It uses LIFO and therefore makes use of the stack data structure.');

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };
  const handleOOP = () => {
    const botMessage = createChatBotMessage('OOPs stands for Object-Oriented Programming System, a paradigm that provides concepts such as objects, classes, and inheritance.');

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };
  const handleOopConcept = () => {
    const botMessage = createChatBotMessage('Object, Class, Polymorphism, Inheritance, Encapsulation, Abstraction');

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };
  const handleBiSearchTree = () => {
    const botMessage = createChatBotMessage('A binary search tree is used to store data in a manner that it can be retrieved very efficiently. The left sub-tree contains nodes whose keys are less than the node’s key value.The right sub-tree contains nodes whose keys are greater than or equal to the node’s key value');
 
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };
  const handleDoubleLL = () => {
    const botMessage = createChatBotMessage('Doubly linked lists are categorized as a special type of linked list in which traversal across the data elements can be done in both directions. This is made possible by the presence of two links in every node, one that links to the node next to it and another that connects to the node before it.');

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };
  const handleGraph = () => {
    const botMessage = createChatBotMessage('A graph is a particular type of data structure that contains a set of ordered pairs. The ordered pairs in a graph are also known as edges or arcs and are most commonly used to connect nodes where the data can be stored and retrieved.');

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };
  const handleDeque = () => {
    const botMessage = createChatBotMessage('A deque is a double-ended queue. This is a structure in which elements can be inserted or removed from either end.');

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };
  const handleSortingAlgorithm = () => {
    const botMessage = createChatBotMessage('There are many types of sorting algorithms: bubble sort, quick sort, balloon sort, merge sort, radix sort, and more.');

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };
  const handleDDS = () => {
    const botMessage = createChatBotMessage('Dynamic data structures have the feature where they expand and contract as a program runs. It provides a very flexible method of data manipulation because adjusts based on the size of the data to be manipulated.');

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };
  const handleLanguages = () => {
    const botMessage = createChatBotMessage('Javascript, Python, Go, Java, Kotlin, C, and C++');

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };
  const handleJavascript = () => {
    const botMessage = createChatBotMessage('JavaScript is the Programming Language for the Web. JavaScript can update and change both HTML and CSS. JavaScript can calculate, manipulate and validate data.');

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };
  const handlePython = () => {
    const botMessage = createChatBotMessage('Python is a popular programming language. It was created by Guido van Rossum, and released in 1991. It is used for: web development (server-side), software development, mathematics, system scripting.');

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };
  const handleC = () => {
    const botMessage = createChatBotMessage('C is a general-purpose programming language created by Dennis Ritchie at the Bell Laboratories in 1972. It is a very popular language, despite being old. C is strongly associated with UNIX, as it was developed to write the UNIX operating system.');

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };
  const handleCPP = () => {
    const botMessage = createChatBotMessage('C++ (or “C-plus-plus”) is a general-purpose programming and coding language. C++ is used in developing browsers, operating systems, and applications, as well as in-game programming, software engineering, data structures, etc.5');

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };
  const handleDatabases = () => {
    const botMessage = createChatBotMessage('In computing, a database is an organized collection of data stored and accessed electronically. Small databases can be stored on a file system, while large databases are hosted on computer clusters or cloud storage.');

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };
  const handleReactJS = () => {
    const botMessage = createChatBotMessage('React is a free and open-source front-end JavaScript library for building user interfaces based on UI components. It is maintained by Meta and a community of individual developers and companies.');

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };
  const handleNodeJS = () => {
    const botMessage = createChatBotMessage('Node.js is an open-source server environment. Node.js is cross-platform and runs on Windows, Linux, Unix, and macOS. Node.js is a back-end JavaScript runtime environment. Node.js runs on the V8 JavaScript Engine and executes JavaScript code outside a web browser.');

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };
  const handleHTMLCSS = () => {
    const botMessage = createChatBotMessage('    // HTML (the Hypertext Markup Language) and CSS (Cascading Style Sheets) are two of the core technologies for building Web pages. HTML provides the structure of the page, CSS the (visual and aural) layout, for a variety of devices.');

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };
  const handleHTML = () => {
    const botMessage = createChatBotMessage(
      "Hypertext Markup Language, a standardized system for tagging text files to achieve font, colour, graphic, and hyperlink effects on World Wide Web pages."
    );

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };
  const handleCSS = () => {
    const botMessage = createChatBotMessage(
      "Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML or XML"
    );

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {
            handleHello,
            handleBye,
            handleIntro,
            handleDS,
            handleArray,
            handleLinkedList,
            handleLIFO,
            handleStack,
            handleFIFO,
            handleQueue,
            handleBinaryTrees,
            handleRecursion,
            handleOOP,
            handleOopConcept,
            handleBiSearchTree,
            handleDoubleLL,
            handleGraph,
            handleDeque,
            handleSortingAlgorithm,
            handleDDS,
            handleLanguages,
            handleJavascript,
            handlePython,
            handleCPP,
            handleC,
            handleDatabases,
            handleReactJS,
            handleNodeJS,
            handleHTMLCSS,
            handleHTML,
            handleCSS,
          },
        });
      })}
    </div>
  );
};

export default ActionProvider;