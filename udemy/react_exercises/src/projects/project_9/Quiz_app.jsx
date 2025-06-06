import { useState, useCallback } from "react";
import QuizProgressBar from "./components/QuizProgressBar";
import Quizzs from "./components/Quizzs";

import { quizData } from "./questions";
const QUESTION_TIME_MS = 10000;
const PROGRESS_INTERVAL = 100;

const Quiz_app = () => {
  const [quizState, setQuizState] = useState({
    quizIndex: 0,
    remainingTime: QUESTION_TIME_MS,
    quizCompleted: false,
  });

  const handleProgessBar = useCallback(() => {
    setQuizState((prevState) => {
      if (prevState.quizCompleted || prevState.remainingTime <= 0) {
        return prevState;
      }
      return {
        ...prevState,
        remainingTime: Math.max(0, prevState.remainingTime - PROGRESS_INTERVAL),
      };
    });
  }, []);

  const handleTimeUp = useCallback(() => {
    setQuizState((prevState) => {
      if (prevState.quizCompleted) {
        return prevState;
      }
      if (prevState.quizIndex < quizData.length - 1) {
        return {
          ...prevState,
          quizIndex: prevState.quizIndex + 1,
          remainingTime: QUESTION_TIME_MS,
        };
      } else {
        return {
          ...prevState,
          remainingTime: 0,
          quizCompleted: true,
        };
      }
    });
  });

  return (
    <section>
      <QuizProgressBar
        onProgress={handleProgessBar}
        timer={quizState.remainingTime}
        onNext={handleTimeUp}
        maxTime={QUESTION_TIME_MS}
      />

      {quizState.quizCompleted ? (
        <div>
          <h2>Quiz completed!</h2>
        </div>
      ) : (
        <Quizzs index={quizState.quizIndex} />
      )}
    </section>
  );
};

export default Quiz_app;
