import { useState, useCallback } from "react";
import QuizProgressBar from "./components/QuizProgressBar";
import Quizzs from "./components/Quizzs";

import { quizData } from "./questions";

const Quiz_app = () => {
  const [quizState, setQuizState] = useState({
    quizIndex: 0,
    remainingTime: 300,
  });

  const handleProgessBar = useCallback(() => {
    setQuizState((prevState) => ({
      ...prevState,
      remainingTime: prevState.remainingTime - 10,
    }));
  }, []);

  function handleNextQuiz() {
    setQuizState((prevState) => {
      let nextIndex;
      if (prevState.quizIndex < quizData.length - 1) {
        nextIndex = prevState.quizIndex + 1;
      } else {
        nextIndex = 0;
      }
      return {
        ...prevState,
        quizIndex: nextIndex,
      };
    });
  }

  function handlePrevQuiz() {
    setQuizState((prevState) => ({
      ...prevState,
      quizIndex: prevState.quizIndex != 0 ? prevState.quizIndex - 1 : 0,
    }));
  }

  return (
    <section>
      <QuizProgressBar
        onProgress={handleProgessBar}
        timer={quizState.remainingTime}
      />

      <Quizzs
        onNext={handleNextQuiz}
        index={quizState.quizIndex}
        onPrev={handlePrevQuiz}
      />
    </section>
  );
};

export default Quiz_app;
