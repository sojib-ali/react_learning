import { useState, useCallback } from "react";
import QuizProgressBar from "./components/QuizProgressBar";
import Quizzs from "./components/Quizzs";

import { quizData } from "./questions";
import "./quiz_app.css";

const QUESTION_TIME_MS = 10000;
const PROGRESS_INTERVAL = 100;

const Quiz_app = () => {
  const [quizState, setQuizState] = useState({
    quizIndex: 0,
    remainingTime: QUESTION_TIME_MS,
    quizCompleted: false,
    optionSelected: null,
    answer: null,
    resultCounter: 0,
    questionAnswered: false,
  });

  const handleResult = useCallback(() => {
    setQuizState((prevState) => {
      if (prevState.questionAnswered) {
        return prevState;
      }
      const isValidSelection =
        prevState.optionSelected !== null && prevState.answer !== null;
      const isCorrect =
        isValidSelection && prevState.optionSelected === prevState.answer;
      return {
        ...prevState,
        resultCounter: isCorrect
          ? prevState.resultCounter + 1
          : prevState.resultCounter,
        questionAnswered: true,
      };
    });
  }, []);

  const handleIsSelected = useCallback((index, answer) => {
    setQuizState((prevState) => {
      return {
        ...prevState,
        optionSelected: index,
        answer: answer,
      };
    });
  }, []);

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
    handleResult();
    setQuizState((prevState) => {
      if (prevState.quizCompleted) {
        return prevState;
      }
      if (prevState.quizIndex < quizData.length - 1) {
        return {
          ...prevState,
          quizIndex: prevState.quizIndex + 1,
          remainingTime: QUESTION_TIME_MS,
          optionSelected: null,
          answer: null,
          questionAnswered: false,
        };
      } else {
        return {
          ...prevState,
          remainingTime: 0,
          quizCompleted: true,
        };
      }
    });
  }, [handleResult]);

  return (
    <section>
      <QuizProgressBar
        onProgress={handleProgessBar}
        timer={quizState.remainingTime}
        onNext={handleTimeUp}
        maxTime={QUESTION_TIME_MS}
        selectedKey={quizState.optionSelected}
      />

      {quizState.quizCompleted ? (
        <div>
          <h2>Quiz completed!</h2>
        </div>
      ) : (
        <Quizzs
          index={quizState.quizIndex}
          isSelected={handleIsSelected}
          selectedKey={quizState.optionSelected}
        />
      )}

      <p>{quizState.resultCounter}</p>
    </section>
  );
};

export default Quiz_app;
