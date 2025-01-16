import { useState } from "react";

export default function Input_form() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  function handleReset() {
    setFirstName("");
    setLastName("");
  }
  function handleSubmit(){
    e.preventDefault();
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="First name"
          onChange={(e) => setFirstName(e.target.value)}
          value={firstName}
        />
        <input
          type="text"
          placeholder="Second name"
          onChange={(e) => setLastName(e.target.value)}
          value={lastName}
        />
      </form>
      <h1>
        Hi,{" "}
        <span>
          {firstName} {lastName}
        </span>{" "}
      </h1>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}
