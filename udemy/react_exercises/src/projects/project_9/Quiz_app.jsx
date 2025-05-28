import { useState } from "react";
import QuizProgressBar from "./components/QuizProgressBar";
import Quizzs from "./components/Quizzs";

import { quizData } from "./questions";

const Quiz_app = () => {
  const [quizState, setQuizState] = useState({
    quizIndex: 0,
    remainingTime: 0,
  });

  function handleQuiz() {
    if (quizIndex < quizData.length - 1) {
      setQuizState({ ...quizIndex, quizIndex: quizIndex + 1 });
    } else {
      setQuizState({ quizIndex: 0 });
    }
  }

  return (
    <section>
      <QuizProgressBar timer={300} />
      <Quizzs onNext={handleQuiz} index={quizState.quizIndex} />
    </section>
  );
};

export default Quiz_app;
