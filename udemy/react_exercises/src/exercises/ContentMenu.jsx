import { useState } from "react";
import { content } from "../data/content";
import "../styles/contentMenu.css";

import Testing from "./Testing";

const ContentMenu = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <>
      <div>
        <button
          onClick={() => setActiveIndex(0)}
          className={activeIndex === 0 ? "active" : ""}
        >
          Why React?
        </button>
        <button
          onClick={() => setActiveIndex(1)}
          className={activeIndex === 1 ? "active" : ""}
        >
          Core features
        </button>
        <button
          onClick={() => setActiveIndex(2)}
          className={activeIndex === 2 ? "active" : ""}
        >
          Related resources
        </button>
        <button
          onClick={() => setActiveIndex(3)}
          className={activeIndex === 3 ? "active" : ""}
        >
          React vs Js
        </button>
        <button
          onClick={() => setActiveIndex(4)}
          className={activeIndex === 4 ? "active" : ""}
        >
          testing page
        </button>
      </div>
      <div>
        <ul>
          {content[activeIndex].map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
      <div>{activeIndex === 4 && <Testing />}</div>
    </>
  );
};

export default ContentMenu;

// const ContentMenu = () => {
//   const [activeIndex, setActiveIndex] = useState(0);

//   return (
//     <div>
//       <button onClick={() => setActiveIndex(4)}>Testing Page</button>
//       {activeIndex === 4 && <Testing />}
//     </div>
//   );
// };
// export default ContentMenu;
