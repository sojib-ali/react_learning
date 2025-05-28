import { useEffect, useState } from "react";

const QuizProgressBar = ({ timer }) => {
  const [remainingTime, setRemainingTime] = useState(timer);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setRemainingTime((prevTime) => {
        if (prevTime <= 10) {
          clearInterval(intervalId);
          return 0;
        }
        return prevTime - 10;
      });
    }, 10);

    return () => {
      clearInterval(intervalId);
    };
  }, [timer]);

  return (
    <>
      <progress value={remainingTime} max={timer} />
    </>
  );
};

export default QuizProgressBar;
