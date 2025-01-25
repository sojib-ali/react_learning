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

  return (
    <div>
      <select onChange={handleColorChange} value={shape.color}>
        <option value="">orange</option>
        <option value="">lightpink</option>
        <option value="">iceblue</option>
      </select>
      <br /> <br />
      <Background />
      <Box color={shape.color}>Drag me</Box>
    </div>
  );
};

export default Canvas;
