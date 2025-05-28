import { useEffect, useState } from "react";

const QuizProgressBar = ({ timer }) => {
  const [remainingTime, setRemainingTime] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRemainingTime((prevTime) => prevTime + 10);
    }, 10);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      <progress value={remainingTime} max={timer} />
    </>
  );
};

export default QuizProgressBar;
