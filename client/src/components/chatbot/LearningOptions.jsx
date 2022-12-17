
import React from "react";

import "./LearningOptions.css";

const LearningOptions = (props) => {
  const options = [
    {
      text: "Javascript",
      handler: props.actionProvider.handleJavascriptList,
      id: 1,
    },
    { text: "React", handler: props.actionProvider.handleReactList, id: 2 },
    { text: "C++", handler: props.actionProvider.handleCppList, id: 3 },
    { text: "Java", handler: props.actionProvider.handleJavaList, id: 4 },
    { text: "Python", handler: props.actionProvider.handlePythonList, id: 5 },
    
    { text: "HTML", handler: props.actionProvider.handleHtmlList, id: 6 },
    { text: "CSS", handler: props.actionProvider.handleCssList, id: 7 },
    { text: "C", handler: props.actionProvider.handleCList, id: 8 },
  ];

  const optionsMarkup = options.map((option) => (
    <button
      className="learning-option-button"
      key={option.id}
      onClick={option.handler}
    >
      {option.text}
    </button>
  ));

  return <div className="learning-options-container">{optionsMarkup}</div>;
};

export default LearningOptions;

