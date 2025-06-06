import { useEffect } from "react";

const QuizProgressBar = ({ timer, onProgress, onNext, maxTime }) => {
  useEffect(() => {
    if (timer <= 0) {
      onNext();
      return;
    }
    const intervalId = setInterval(() => {
      onProgress();
    }, 100);

    return () => {
      clearInterval(intervalId);
    };
  }, [timer, onProgress, onNext]);

  return (
    <>
      <progress value={timer} max={maxTime} />
    </>
  );
};

export default QuizProgressBar;
