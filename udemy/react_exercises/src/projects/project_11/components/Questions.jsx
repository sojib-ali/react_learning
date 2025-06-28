import QuestionTimer from "./QuestionTimer";
import Answers from "./Answers";

const Questions = ({
  questionText,
  answers,
  onSelectedAnswer,
  selectedAnswer,
  answerState,
  onSkipAnswer,
}) => {
  return (
    <div id="question">
      <QuestionTimer
        // key={activeQuestionIndex} // to reset the timer for a new qestion
        timeout={10000}
        onTimeout={onSkipAnswer}
      />
      <h2>{questionText}</h2>
      <Answers
        // key={activeQuestionIndex} // new answers for a new question - unmount the prev and mount the new
        answers={answers}
        selectedAnswer={selectedAnswer}
        answerState={answerState}
        onSelect={onSelectedAnswer}
      />
    </div>
  );
};

export default Questions;
