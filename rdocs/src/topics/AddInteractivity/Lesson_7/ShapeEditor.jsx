import { useState } from "react";

let initialShapes = [
  { id: 0, type: "circle", x: 50, y: 100 },
  { id: 1, type: "square", x: 150, y: 100 },
  { id: 2, type: "circle", x: 250, y: 100 },
];

const ShapeEditor = () => {
  const [shapes, setShapes] = useState(initialShapes);

  function handleClick() {
    setShapes((prevShapes) =>
      prevShapes.map((shape) =>
        shape.type === "circle"
          ? {
              ...shape,
              y: shape.y + 50,
            }
          : shape
      )
    );
  }
  return (
    <div>
      <button onClick={handleClick}>Move circle down</button>

      {shapes.map((shape) => (
        <div
          key={shape.id}
          style={{
            background: "blue",
            position: "absolute",
            left: shape.x,
            top: shape.y,
            width: 20,
            height: 20,
            position: "absolute",
            borderRadius: shape.type === "circle" ? "50%" : "",
          }}
        />
      ))}
    </div>
  );
};

export default ShapeEditor;
