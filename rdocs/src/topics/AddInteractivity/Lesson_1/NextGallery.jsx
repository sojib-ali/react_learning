import { useState } from "react";
import { sculptureList } from "../../../utils/data_NextGallery.js";

export default function NextGallery() {
  const [index, setIndex] = useState(0);
  const [isShown, setIsShown] = useState(false);
  let sclupture = sculptureList[index];
  return (
    <>
      <button
        onClick={() => {
          if (index > 0) {
            setIndex(index - 1);
          }
        }}
        disabled={index <= 0}
      >
        Previous
      </button>
      <button
        onClick={() => {
          //   setIndex((index + 1) % sculptureList.length);
          if (index < sculptureList.length - 1) {
            // setIndex(0);
            setIndex(index + 1);
          }
        }}
        disabled={index >= sculptureList.length - 1}
      >
        {" "}
        Next{" "}
      </button>
      <h2>
        <i>{sclupture.name}</i> by {sclupture.artist}
      </h2>
      <h3>
        ({index + 1} of {sculptureList.length})
      </h3>
      <button onClick={() => setIsShown(!isShown)}>
        {isShown ? "hide" : "show details"}
      </button>
      {isShown && <p>{sclupture.description}</p>}

      <div>
        <img src={sclupture.url} alt={sclupture.alt} />
      </div>
    </>
  );
}
