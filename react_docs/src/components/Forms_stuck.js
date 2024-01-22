import { useState } from "react";
export default function Forms_stuck() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  function handlFirstNameChange(e) {
    setFirstName(e.target.value);
  }
  function handleLastNameChange(e) {
    setLastName(e.target.value);
  }
  function handleReset() {
    setFirstName("");
    setLastName("");
  }

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <input
        placeholder="First name"
        value={firstName}
        onChange={handlFirstNameChange}
      />
      <input
        placeholder="Last name"
        value={lastName}
        onChange={handleLastNameChange}
      />
      <h1>
        Hi, {firstName} {lastName}
      </h1>
      <button onClick={handleReset}>Reset</button>
    </form>
  );
}
