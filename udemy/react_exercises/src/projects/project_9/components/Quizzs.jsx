import { useState } from "react";
import { quizData } from "../questions";

const Quizzs = ({ onNext, index }) => {
  //   const [index, setIndex] = useState(0);

  let quiz = quizData[index];

  function handleNext() {
    // if (index < quizData.length - 1) {
    //   setIndex(index + 1);
    // } else {
    //   setIndex(0);
    // }
    onNext();
  }

  function handlePrev() {
    if (index != 0) {
      setIndex(index - 1);
    }
  }
  return (
    <>
      <h2> {quiz.question} </h2>
      <ul>
        {Object.entries(quiz.options).map(([key, option]) => (
          <li key={key}>{option}</li>
        ))}
      </ul>
      <button onClick={handleNext}>Next</button>{" "}
      <button onClick={handlePrev}>Prev</button>
    </>
  );
};

export default Quizzs;
