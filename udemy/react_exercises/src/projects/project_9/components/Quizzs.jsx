import { quizData } from "../questions";

const Quizzs = ({ index, isSelected, selectedKey }) => {
  let quiz = quizData[index];
  let options = (
    <ul>
      {Object.entries(quiz.options).map(([key, option]) => (
        <li
          className={selectedKey === key ? "option-selected" : "quiz-options"}
          key={key}
          onClick={() => isSelected(key, quiz.answer, quiz.question)}
        >
          {option}
        </li>
      ))}
    </ul>
  );

  return (
    <>
      <h2> {quiz.question} </h2>
      <div>{options}</div>
    </>
  );
};

export default Quizzs;
