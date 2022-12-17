import { createChatBotMessage } from "react-chatbot-kit";
import React from "react";
import LearningOptions from "./LearningOptions";
import LinkList from "./LinkList";

const config = {
  initialMessages: [
    createChatBotMessage("Hi, I'm here to help. What do you want to 		learn?", {
      widget: "learningOptions",
    }),
  ],
  customStyles: {
    botMessageBox: {
      backgroundColor: "darkorange",
    },
    chatButton: {
      backgroundColor: "darkorange",
    },
  },
  widgets: [
    {
      widgetName: "learningOptions",
      widgetFunc: (props) => <LearningOptions {...props} />,
    },
    {
      widgetName: "javascriptLinks",
      widgetFunc: (props) => <LinkList {...props} />,
      props: {
        questions: [
          {
            question: "What is Javascript?",
            answer:
              "JavaScript is a scripting language. It is different from Java language. It is object-based, lightweight, cross-platform translated language. It is widely used for client-side validation.",
            id: 1,
          },
          {
            question: "What is closure?",
            answer:
              "Closure is a way for a function to retain access to it's enclosing function scope after the execution of that function is finished.",
            id: 2,
          },
          {
            question: "Explain prototypal inheritance",
            answer:
              "Prototypal inheritance is a link between an object and an object store that holds shared properties. If a property is not found on the host object, javascript will check the prototype object.",
            id: 3,
          },
          {
            question:
              "What are the key differences between Java and JavaScript?",
            answer:
              "Java is an OOP programming language, and it helps to create applications that function in a virtual machine or browser, while JavaScript is an OOP scripting language. Also, the JavaScript code runs on a browser only.",
            id: 4,
          },
          {
            question: "What is DOM? What is the use of document object?",
            answer:
              "DOM stands for Document Object Model. A document object represents the HTML document. It can be used to access and change the content of HTML.",
            id: 5,
          },
        ],
      },
    },
    {
      widgetName: "reactLinks",
      widgetFunc: (props) => <LinkList {...props} />,
      props: {
        questions: [
          {
            question: "What is React?",
            answer:
              "React is a declarative, efficient, flexible open source front-end JavaScript library developed by Facebook in 2011. It follows the component-based approach for building reusable UI components, especially for single page application. It is used for developing interactive view layer of web and mobile apps.",
            id: 1,
          },
          {
            question: "What is JSX?",
            answer:
              "JSX stands for JavaScript XML. It is a React extension which allows writing JavaScript code that looks similar to HTML. It makes HTML file easy to understand. The JSX file makes the React application robust and boosts its performance. JSX provides you to write XML-like syntax in the same file where you write JavaScript code, and then preprocessor (i.e., transpilers like Babel) transform these expressions into actual JavaScript code. Just like XML/HTML, JSX tags have a tag name, attributes, and children.",
            id: 2,
          },
          {
            question: "Why can't browsers read JSX?",
            answer:
              "Browsers cannot read JSX directly because they can only understand JavaScript objects, and JSX is not a regular JavaScript object. Thus, we need to transform the JSX file into a JavaScript object using transpilers like Babel and then pass it to the browser.",
            id: 3,
          },
          {
            question: "What is Virtual DOM?",
            answer:
              "A Virtual DOM is a lightweight JavaScript object which is an in-memory representation of real DOM. It is an intermediary step between the render function being called and the displaying of elements on the screen. It is similar to a node tree which lists the elements, their attributes, and content as objects and their properties. The render function creates a node tree of the React components and then updates this node tree in response to the mutations in the data model caused by various actions done by the user or by the system.",
            id: 4,
          },
          {
            question: "Explain the purpose of render() in React",
            answer:
              "It is mandatory for each React component to have a render() function. Render function is used to return the HTML which you want to display in a component. If you need to rendered more than one HTML element, you need to grouped together inside single enclosing tag (parent tag) such as <div>, <form>, <group> etc. This function returns the same result each time it is invoked.",
            id: 5,
          },
          {
            question: "What is a State in React?",
            answer:
              "The State is an updatable structure which holds the data and information about the component. It may be changed over the lifetime of the component in response to user action or system event. It is the heart of the react component which determines the behavior of the component and how it will render. It must be kept as simple as possible.",
            id: 6,
          },
        ],
      },
    },
    {
      widgetName: "cppLinks",
      widgetFunc: (props) => <LinkList {...props} />,
      props: {
        questions: [
          {
            question: "What is C++?",
            answer:
              "C++ is an object-oriented programming language created by Bjarne Stroustrup. It was released in 1985.C++ is a superset of C with the major addition of classes in C language.Initially, Stroustrup called the new language C with classes. However, after sometime the name was changed to C++. The idea of C++ comes from the C increment operator ++.",
            id: 1,
          },
          {
            question: "What is difference between C and C++?",
            answer:
              "he C language is a procedural one that provides no support for objects and classes. On the other hand, the C++ language is a combination of object-oriented and procedural programming languages.",
            id: 2,
          },
          {
            question: "What is a class?",
            answer:
              "The class is a user-defined data type. The class is declared with the keyword class. The class contains the data members, and member functions whose access is defined by the three modifiers are private, public and protected. The class defines the type definition of the category of things.",
            id: 3,
          },
          {
            question: "What is an Object?",
            answer:
              "The Object is the instance of a class. A class provides a blueprint for objects. So you can create an object from a class. The objects of a class are declared with the same sort of declaration that we declare variables of basic types.",
            id: 4,
          },
          {
            question: " What is Object Oriented Programming (OOP)?",
            answer:
              "OOP is a methodology or paradigm that provides many concepts. The basic concepts of Object Oriented Programming are Classes and Objects, Encapsulation, Abstraction, Inheritance",
            id: 5,
          },
          {
            question: "What is a constructor?",
            answer:
              "A Constructor is a special method that initializes an object. Its name must be same as class name.",
            id: 6,
          },
        ],
      },
    },
    {
      widgetName: "javaLinks",
      widgetFunc: (props) => <LinkList {...props} />,
      props: {
        questions: [
          {
            question: "What is Java?",
            answer:
              "Java is the high-level, object-oriented, robust, secure programming language, platform-independent, high performance, Multithreaded, and portable programming language. It was developed by James Gosling in June 1991. It can also be known as the platform as it provides its own JRE and API.",
            id: 1,
          },
          {
            question: "What is the difference between C++ and Java?",
            answer:
              "C++ is platform-dependent.	Java is platform-independent.C++ is mainly used for system programming.	Java is mainly used for application programming. It is widely used in window, web-based, enterprise and mobile applications.",
            id: 2,
          },
          {
            question: "Why is JVM?",
            answer:
              "JVM is an acronym for Java Virtual Machine; it is an abstract machine which provides the runtime environment in which Java bytecode can be executed. It is a specification which specifies the working of Java Virtual Machine. Its implementation has been provided by Oracle and other companies. ",
            id: 3,
          },
          {
            question: "What is the purpose of static methods and variables?",
            answer:
              "The methods or variables defined as static are shared among all the objects of the class. The static is the part of the class and not of the object. The static variables are stored in the class area, and we do not need to create the object to access such variables. Therefore, static is used in the case, where we need to define variables or methods which are common to all the objects of the class.",
            id: 4,
          },
          {
            question: "What are the advantages of Packages in Java?",
            answer:
              "Packages avoid the name clashes.The Package provides easier access control.We can also have the hidden classes that are not visible outside and used by the package.It is easier to locate the related classes.",
            id: 5,
          },
        ],
      },
    },
    {
      widgetName: "pythonLinks",
      widgetFunc: (props) => <LinkList {...props} />,
      props: {
        questions: [
          {
            question: "What is Python?",
            answer:
              "It is a general-purpose computer programming language. It is a high-level, object-oriented language which can run equally on different platforms such as Windows, Linux, UNIX, and Macintosh. Its high-level built-in data structures, combined with dynamic typing and dynamic binding.It is easy to learn and require less code to develop the applications.",
            id: 1,
          },
          {
            question: "Why do we use join() function in Python?",
            answer:
              "The join() is defined as a string method which returns a string value. It is concatenated with the elements of an iterable. It provides a flexible way to concatenate the strings.",
            id: 2,
          },
          {
            question: "What is the use of break statement?",
            answer:
              "The break statement is used to terminate the execution of the current loop. Break always breaks the current execution and transfer control to outside the current block. If the block is in a loop, it exits from the loop, and if the break is in a nested loop, it exits from the innermost loop.",
            id: 3,
          },
          {
            question: "What is tuple in Python?",
            answer:
              "A tuple is a built-in data collection type. It allows us to store values in a sequence. It is immutable, so no change is reflected in the original data. It uses () brackets rather than [] square brackets to create a tuple. We cannot remove any element but can find in the tuple. We can use indexing to get elements. It also allows traversing elements in reverse order by using negative indexing. Tuple supports various methods like max(), sum(), sorted(), Len() etc.",
            id: 4,
          },
          {
            question: "Is Python interpreted language?",
            answer:
              "Python is an interpreted language. The Python language program runs directly from the source code. It converts the source code into an intermediate language code, which is again translated into machine language that has to be executed.Unlike Java or C, Python does not require compilation before execution.",
            id: 5,
          },
        ],
      },
    },
    
    {
      widgetName: "htmlLinks",
      widgetFunc: (props) => <LinkList {...props} />,
      props: {
        questions: [
          {
            question: "What is HTML?",
            answer:
              "HTML stands for Hyper Text Markup Language. It is a language of World Wide Web. It is a standard text formatting language which is used to create and display pages on the Web. It makes the text more interactive and dynamic.",
            id: 1,
          },
          {
            question: "What are Tags?",
            answer:
              "HTML tags are composed of three things: an opening tag, content and ending tag. Some tags are unclosed tags.HTML documents contains two things : content and tags.When a web browser reads an HTML document, the browser reads it from top to bottom and left to right. HTML tags are used to create HTML documents and render their properties. Each HTML tags have different properties.",
            id: 2,
          },
          {
            question: "What is the difference between HTML elements and tags?",
            answer:
              "HTML elements communicate to the browser to render text. When the elements are enclosed by brackets <>, they form HTML tags. Most of the time, tags come in a pair and surround content.",
            id: 3,
          },
          {
            question: "What are the entities in HTML?",
            answer:
              "The HTML character entities are used as a replacement for reserved characters in HTML. You can also replace characters that are not present on your keyboard by entities. These characters are replaced because some characters are reserved in HTML.",
            id: 4,
          },
          {
            question: " Does a <!DOCTYPE html> tag is a HTML tag?",
            answer:
              "No, the <!DOCTYPE html> declaration is not an HTML tag. There are many type of HTML e.g. HTML 4.01 Strict, HTML 4.01 Transitional, HTML 4.01 Frameset, XHTML 1.0 Strict, XHTML 1.0 Transitional, XHTML 1.0 Frameset, XHTML 1.1 etc. So, <!DOCTYPE html> is used to instruct the web browser about the HTML page.",
            id: 5,
          },
        ],
      },
    },
    {
      widgetName: "cssLinks",
      widgetFunc: (props) => <LinkList {...props} />,
      props: {
        questions: [
          {
            question: "What is CSS?",
            answer:
              "CSS stands for Cascading Style Sheet. It is a popular styling language which is used with HTML to design websites. It can also be used with any XML documents including plain XML, SVG, and XUL.",
            id: 1,
          },
          {
            question: "What are the CSS frameworks?",
            answer:
              "CSS frameworks are the preplanned libraries which make easy and more standard compliant web page styling. Few of the frameworks are BootStrap, Semantic UI, Gumby",
            id: 2,
          },
          {
            question: "What is a CSS selector?",
            answer:
              "It is a string that identifies the elements to which a particular declaration apply. It is also referred as a link between the HTML document and the style sheet. It is equivalent of HTML elements.",
            id: 3,
          },
          {
            question: "Explain universal selector?",
            answer:
              "The universal selector matches the name of any of the element type instead of selecting elements of a specific type.",
            id: 4,
          },
          {
            question:
              " What is the difference between class selectors and id selectors?",
            answer:
              "An overall block is given to class selector while id selectors take only a single element differing from other elements.",
            id: 5,
          },
        ],
      },
    },
    {
      widgetName: "cLinks",
      widgetFunc: (props) => <LinkList {...props} />,
      props: {
        questions: [
          {
            question: "What is C language?",
            answer:
              "C is a mid-level and procedural programming language. The Procedural programming language is also known as the structured programming language is a technique in which large programs are broken down into smaller modules, and each module uses structured code. This technique minimizes error and misinterpretation.",
            id: 1,
          },
          {
            question: "Why is C called a mid-level programming language?",
            answer:
              "C is called a mid-level programming language because it binds the low level and high -level programming language. We can use C language as a System programming to develop the operating system as well as an Application programming to generate menu driven customer driven billing system.",
            id: 2,
          },
          {
            question: "What is recursion in C?",
            answer:
              "When a function calls itself, and this process is known as recursion. The function that calls itself is known as a recursive function.",
            id: 3,
          },
          {
            question: "What is an array in C?",
            answer:
              "An Array is a group of similar types of elements. It has a contiguous memory location. It makes the code optimized, easy to traverse and easy to sort. The size and type of arrays cannot be changed after its declaration.",
            id: 4,
          },
          {
            question: "What is a pointer in C?",
            answer:
              "A pointer is a variable that refers to the address of a value. It makes the code optimized and makes the performance fast. Whenever a variable is declared inside a program, then the system allocates some memory to a variable. The memory contains some address number. The variables that hold this address number is known as the pointer variable.",
            id: 5,
          },
          
        ],
      },
    },
  ],
};
export default config;
