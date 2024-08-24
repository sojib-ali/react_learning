import { useState } from "react";

export default function () {
  const [num, setNum] = useState(0);

  function handleClick() {
    setNum(num + 2);
    setNum(num + 5);
    alert(num);
    console.log(num);
  }
  return (
    <>
      <div className="">
        <h1>{num}</h1>
        <button
          className="bg-slate-300 rounded-md p-2 px-5 align-middle"
          onClick={handleClick}
        >
          some button
        </button>
      </div>
    </>
  );
}