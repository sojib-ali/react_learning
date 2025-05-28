import QuizProgressBar from "./components/QuizProgressBar";
import Quizzs from "./components/Quizzs";

const Quiz_app = () => {
  return (
    <section>
      <QuizProgressBar timer={300} />
      <Quizzs />
    </section>
  );
};

export default Quiz_app;
