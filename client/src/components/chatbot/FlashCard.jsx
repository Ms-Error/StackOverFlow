import React, { useState, useEffect } from "react";

import "./LinkList.css";

const FlashCard = ({ question, answer }) => {
  const [showAnswer, setShowAnswer] = useState(false);

  useEffect(() => setShowAnswer(false), [question]);

  return (
    <>
      <div
        className="flashcard-container"
        onClick={() => setShowAnswer(!showAnswer)}
      >
        {!showAnswer && question}
        {showAnswer && answer}
      </div>
    </>
  );
};

export default FlashCard;
