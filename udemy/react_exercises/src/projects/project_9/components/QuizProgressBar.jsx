import { useEffect } from "react";

const QuizProgressBar = ({ timer, onProgress }) => {
  useEffect(() => {
    if (timer < 10) {
      return;
    }
    const intervalId = setInterval(() => {
      onProgress();
    }, 10);

    return () => {
      clearInterval(intervalId);
    };
  }, [timer, onProgress]);

  return (
    <>
      <progress value={timer} max={300} />
    </>
  );
};

export default QuizProgressBar;
