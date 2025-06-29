import { useCallback, useState } from "react";
import QUESTION from "./../assets/questions.js";
import Questions from "./Questions.jsx";
import Summary from "./Summary.jsx";

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
    return <Summary usersAnswers={usersAnswers} />;
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
