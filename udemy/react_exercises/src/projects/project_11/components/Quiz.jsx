import { useCallback, useState } from "react";
import QUESTION from "./../assets/questions.js";
import quizCompletion from "../assets/quiz-complete.png";
import Questions from "./Questions.jsx";

const Quiz = () => {
  const [usersAnswers, setUserAnswers] = useState([]);

  const activeQuestionIndex = usersAnswers.length;

  const quizIsComplete = activeQuestionIndex === QUESTION.length;

  const handleSelectAnswer = useCallback(function handleSelectAnswer(
    selectedAnswer
  ) {
    setUserAnswers((prevAnswer) => {
      return [...prevAnswer, selectedAnswer];
    });
  },
  []);

  const handleSkipAnswer = useCallback(() => {
    handleSelectAnswer(null);
  }, [handleSelectAnswer]);

  if (quizIsComplete) {
    return (
      <div id="summary">
        <img src={quizCompletion} alt="quiz completed" />
        <h2>Quiz has been completed</h2>
      </div>
    );
  }

  return (
    <div id="quiz">
      <Questions
        key={activeQuestionIndex}
        index={activeQuestionIndex}
        onSelectAnswer={handleSelectAnswer}
        onSkipAnswer={handleSkipAnswer}
      />
    </div>
  );
};

export default Quiz;
