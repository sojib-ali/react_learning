// import { useState } from "react";

import { useState } from "react";

// const SignalColor = () => {
//   const message = {
//     stop: "stop",
//     walk: "walk",
//   };

//   const [currentMessage, setCurrentMessage] = useState(message.walk);
//   const [color, setColor] = useState("Green");

//   const handleClick = () => {
//     setCurrentMessage((prev) =>
//       prev === message.stop ? message.walk : message.stop
//     );
//     alert(`${currentMessage} is next`);
//     setColor((prev) => (prev === "green" ? "red" : "green"));
//   };

//   return (
//     <>
//       <button onClick={handleClick}>change to {currentMessage}</button>
//       <h1 style={{ color: color }}>{currentMessage}</h1>
//     </>
//   );
// };

// export default SignalColor;

const SignalColor = () => {
  const [signal, setSignal] = useState(false);

  const handleClick = () => {
    setSignal(!signal);
    alert(!signal ? "stop" : "walk");
  };
  return (
    <div>
      <button onClick={handleClick}>
        change to {signal ? "walk" : "stop"}
      </button>
      <h1 style={{ color: signal ? "red" : "green" }}>
        change to {signal ? "stop" : "walk"}
      </h1>
    </div>
  );
};

export default SignalColor;
