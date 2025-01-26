import { useState } from "react";
import Background from "./Background";
import Box from "./Box";

const initialPosition = {
  x: 0,
  y: 0,
};

const Canvas = () => {
  const [shape, setShape] = useState({
    color: "orange",
    position: initialPosition,
  });

  function handleColorChange(e) {
    setShape({
      ...shape,
      color: e.target.value,
    });
  }

  function handleMove(dx, dy) {
    setShape({
      ...shape,
      position: {
        x: shape.position.x + dx,
        y: shape.position.y + dy,
      },
    });
  }

  return (
    <div>
      <select onChange={handleColorChange} value={shape.color}>
        <option value="orange">orange</option>
        <option value="lightpink">lightpink</option>
        <option value="aliceblue">aliceblue</option>
      </select>
      <br /> <br />
      <Background position={initialPosition} />
      <Box color={shape.color} onMove={handleMove} position={shape.position}>
        Drag me
      </Box>
    </div>
  );
};

export default Canvas;
