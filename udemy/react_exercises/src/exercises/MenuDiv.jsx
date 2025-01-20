import { useState } from "react";

const MenuDiv = () => {
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
      </div>
      <div>
        {activeIndex === 0 && (
          <div>
            <h2>first div content</h2>
          </div>
        )}
        {activeIndex === 1 && (
          <div>
            <h2>second div content</h2>
          </div>
        )}
      </div>
      <div>
        {activeIndex === 2 && (
          <div>
            <h2>third div content</h2>
          </div>
        )}
      </div>
    </>
  );
};

export default MenuDiv;
