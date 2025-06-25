import { useState } from "react";
import QUESTION from "./../assets/questions.js";

const Quiz = () => {
  const [usersAnswers, setUserAnswers] = useState([]);
  const activeQuestionIndex = usersAnswers.length;

  function handleSelectAnswer(selectedAnswer) {
    setUserAnswers((prevAnswer) => {
      return [...prevAnswer, selectedAnswer];
    });
  }
  return (
    <div id="quiz">
      <div id="question">
        <h2>{QUESTION[activeQuestionIndex].text}</h2>
        <ul id="answers">
          {QUESTION[activeQuestionIndex].answers.map((answer) => (
            <li key={answer} className="answer">
              <button onClick={() => handleSelectAnswer(answer)}>
                {" "}
                {answer}{" "}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Quiz;
