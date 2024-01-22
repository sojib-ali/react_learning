import { useState } from "react";
import { sculptureList } from "./data";

export default function State_gallery() {
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);

  let hasPrev = index > 0;
  let hasNext = index < sculptureList.length - 1;

  function handlePrevClick() {
    setIndex(index - 1);
  }
  function handleNextClick() {
    setIndex(index + 1);
  }

  function handleMoreClick() {
    setShowMore(!showMore);
  }
  let sculpture = sculptureList[index];
  return (
    <>
      <button onClick={handlePrevClick} disabled={!hasPrev}>
        {" "}
        Previous
      </button>
      <button onClick={handleNextClick} disabled={!hasNext}>
        {" "}
        Next
      </button>
      <h2>
        <i>{sculpture.name}</i> by {sculpture.artist}
      </h2>
      <h3>
        ({index + 1} of {sculptureList.length})
      </h3>
      <img
        src={sculpture.url}
        alt={sculpture.alt}
        style={{ display: "block", margin: "auto" }}
      />

      <button
        onClick={handleMoreClick}
        style={{ display: "block", margin: "auto" }}
      >
        {showMore ? "Hide" : "Show"} details
      </button>

      {showMore && <p> {sculpture.description} </p>}
    </>
  );
}
