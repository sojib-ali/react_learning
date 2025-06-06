import { quizData } from "../questions";

const Quizzs = ({ index }) => {
  let quiz = quizData[index];
  let options = (
    <ul>
      {Object.entries(quiz.options).map(([key, option]) => (
        <li key={key}>{option}</li>
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
