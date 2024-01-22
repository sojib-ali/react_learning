import { useState } from "react";
export default function TrafficLight() {
  const [walk, setWalk] = useState(true);

  function handleTraffic() {
    setWalk(!walk);
    alert(walk ? "stop is next" : "walk is next");
  }

  return (
    <>
      <button onClick={handleTraffic}>
        Change to {walk ? "Stop" : "Walk"}
      </button>
      <h1
        style={{
          color: walk ? "darkgreen" : "darkred",
        }}
      >
        {walk ? "Walk" : "Stop"}
      </h1>
    </>
  );
}
