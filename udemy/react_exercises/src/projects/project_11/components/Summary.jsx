import quizCompletion from "../assets/quiz-complete.png";
import QUESTIONS from "../assets/questions";

const Summary = ({ usersAnswers }) => {
  return (
    <div id="summary">
      {" "}
      <img src={quizCompletion} alt="quiz completed" />
      <h2>Quiz has been completed</h2>
      <div id="summary-stats">
        <p>
          <span className="number">10%</span>
          <span className="text">skipped</span>
        </p>
        <p>
          <span className="number">10%</span>
          <span className="text">answered correctly</span>
        </p>
        <p>
          <span className="number">10%</span>
          <span className="text">answered incorrectly</span>
        </p>
      </div>
      <ol>
        {usersAnswers.map((answer, index) => {
          return (
            <li key={answer}>
              <h3>{index + 1}</h3>
              <p className="question">{QUESTIONS[index].text}</p>
              <p className="user-answer">{answer ?? "Skipped"}</p>
            </li>
          );
        })}
      </ol>
    </div>
  );
};

export default Summary;
