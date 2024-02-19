import { useEffect } from "react";
import { useState } from "react";

export default function Use_eff_button() {
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    if (clicked) {
      console.log("in");
    }
  }, [clicked]);
  function handle_click() {
    setClicked(true);
  }
  return <button onClick={handle_click}>Cause effect</button>;
}
