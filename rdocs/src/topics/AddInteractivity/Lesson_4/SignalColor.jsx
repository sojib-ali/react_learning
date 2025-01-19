import { useState } from "react";

const SignalColor = () => {
  const message = {
    stop: "stop",
    walk: "walk",
  };

  const [currentMessage, setCurrentMessage] = useState(message.walk);
  const [color, setColor] = useState("Green");

  const handleClick = () => {
    setCurrentMessage((prev) =>
      prev === message.stop ? message.walk : message.stop
    );
    alert(`${currentMessage} is next`);
    setColor((prev) => (prev === "green" ? "red" : "green"));
  };

  return (
    <>
      <button onClick={handleClick}>change to {currentMessage}</button>
      <h1 style={{ color: color }}>{currentMessage}</h1>
    </>
  );
};

export default SignalColor;
