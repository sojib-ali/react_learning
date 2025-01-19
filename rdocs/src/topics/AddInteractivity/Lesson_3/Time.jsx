import { useEffect, useState } from "react";

function useTime() {
  const [time, setTime] = useState(() => new Date());
  useEffect(() => {
    const id = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(id);
  }, []);
  return time;
}

export default function Clock_3() {
  const times = useTime();
  return (
    <>
      <h1>{times.toLocaleTimeString()}</h1>
      <input type="text" />
    </>
  );
}
