import React ,{useState}from "react";

import FlashCard from "./FlashCard";

const LinkList = (props) => {
  console.log(props);
 var questionIndex =0;

  
  const linkMarkup = props.questions.map((link) => (
    <li key={link.id} className="link-list-item">
      <FlashCard
        question={props.questions[questionIndex].question}
        answer={props.questions[questionIndex].answer}
      >
        {link.question}
        {(questionIndex = questionIndex + 1)}
      </FlashCard>
    </li>
  ));

  return <ul className="link-list">{linkMarkup}</ul>
};

export default LinkList;
