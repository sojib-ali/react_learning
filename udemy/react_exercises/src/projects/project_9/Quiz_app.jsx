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
    answeredQuestion: [],
  });

  const handleIsSelected = useCallback((selectedKey, correctAnswerKey) => {
    setQuizState((prevState) => {
      return {
        ...prevState,
        optionSelected: selectedKey,
        answer: correctAnswerKey,
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
    setQuizState((prevState) => {
      if (prevState.quizCompleted) {
        return prevState;
      }
      const currentQuestionData = quizData[prevState.quizIndex];
      const questionText = currentQuestionData.question;

      const isSkipped = prevState.optionSelected === null;
      const isCorrect =
        !isSkipped && prevState.optionSelected === prevState.answer;

      const newAnsweredQuestion = {
        text: questionText,
        wasCorrect: isCorrect,
        wasSkipped: isSkipped,
      };
      const updatedAnsweredQuestion = [
        ...prevState.answeredQuestion,
        newAnsweredQuestion,
      ];
      const updatedResultCounter =
        isCorrect && !isSkipped
          ? prevState.resultCounter + 1
          : prevState.resultCounter;

      if (prevState.quizIndex < quizData.length - 1) {
        return {
          ...prevState,
          quizIndex: prevState.quizIndex + 1,
          remainingTime: QUESTION_TIME_MS,
          optionSelected: null,
          answer: null,
          resultCounter: updatedResultCounter,
          answeredQuestion: updatedAnsweredQuestion,
        };
      } else {
        return {
          ...prevState,
          remainingTime: 0,
          quizCompleted: true,
          resultCounter: updatedResultCounter,
          answeredQuestion: updatedAnsweredQuestion,
          optionSelected: null,
          answer: null,
        };
      }
    });
  }, []);

  const getClassName = () => {
    if (answeredQuestion.isSkipped) return "quiz-skipped";
    return answeredQuestion.wasCorrect ? "quiz-green" : "quiz-red";
  };

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
          <p>
            Your Score: {quizState.resultCounter} / {quizData.length}{" "}
          </p>
        </div>
      ) : (
        <Quizzs
          index={quizState.quizIndex}
          isSelected={handleIsSelected}
          selectedKey={quizState.optionSelected}
        />
      )}

      <div>
        {quizState.quizCompleted && (
          <>
            <h3>Summary:</h3>
            <ul>
              {quizState.answeredQuestion.map((answeredQ, index) => (
                <li
                  key={index}
                  className={
                    answeredQ.wasSkipped
                      ? "quiz-skipped"
                      : answeredQ.wasCorrect
                      ? "quiz-green"
                      : "quiz-red"
                  }
                >
                  {answeredQ.text} -{" "}
                  {answeredQ.wasSkipped
                    ? "skipped"
                    : answeredQ.wasCorrect
                    ? "correct"
                    : "incorrect"}
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    </section>
  );
};

export default Quiz_app;
