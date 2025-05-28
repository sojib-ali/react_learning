import { useState } from "react";
import { quizData } from "../questions";

const Quizzs = ({ onNext, index, onPrev }) => {
  let quiz = quizData[index];

  return (
    <>
      <h2> {quiz.question} </h2>
      <ul>
        {Object.entries(quiz.options).map(([key, option]) => (
          <li key={key}>{option}</li>
        ))}
      </ul>
      <button onClick={() => onNext()}>Next</button>{" "}
      <button onClick={() => onPrev()}>Prev</button>
    </>
  );
};

export default Quizzs;
