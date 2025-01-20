import { useState } from "react";

// const delay = (ms) => {
//   return new Promise((resolve) => {
//     setTimeout(resolve, ms);
//   });
// };

const RequestTracker = () => {
  const [pending, setPending] = useState(0);
  const [completed, setCompleted] = useState(0);
  const handleClick = () => {
    setPending((p) => p + 1);
    setTimeout(() => {
      setPending((p) => p - 1);
      setCompleted((c) => c + 1);
    }, 2000);
  };

  //   async function handleClick() {
  //     setPending((p) => p + 1);
  //     await delay(2000);
  //     setPending((p) => p - 1);
  //     setCompleted((c) => c + 1);
  //   }

  return (
    <div>
      <h1>Pending: {pending}</h1>
      <h1>Completed: {completed}</h1>
      <button onClick={handleClick}>Buy</button>
    </div>
  );
};

export default RequestTracker;
