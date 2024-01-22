import * as React from "react";
import quotes from "./quotes";
import FancyText from "./FancyText";
import inspiration from "./inspiration";
import Color from "./Color";

export default function InspirationGenerator({ children }) {
  const [index, setIndex] = React.useState(0);
  // const quote =quotes[index];
  const inspirations = inspiration[index];
  const next = () => setIndex((index + 1) % inspiration.length);

  return (
    <>
      <p>Your Inspirational {inspirations.type} is: </p>
      <p>{index}</p>
      {inspirations.type === "quote" ? (
        <FancyText text={inspirations.value} />
      ) : (
        <Color value={inspirations.value} />
      )}

      <button onClick={next}>Inspire me again</button>
      {children}
    </>
  );
}
