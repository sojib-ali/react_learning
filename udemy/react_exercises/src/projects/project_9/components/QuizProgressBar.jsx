import { useEffect } from "react";

const QuizProgressBar = ({
  timer,
  onProgress,
  onNext,
  maxTime,
  selectedKey,
}) => {
  useEffect(() => {
    const speed = selectedKey !== null ? 10 : 100;
    if (timer <= 0) {
      onNext();
      return;
    }
    const intervalId = setInterval(() => {
      onProgress();
    }, speed);

    return () => {
      clearInterval(intervalId);
    };
  }, [timer, onProgress, onNext, selectedKey]);

  return (
    <>
      <progress value={timer} max={maxTime} />
    </>
  );
};

export default QuizProgressBar;
