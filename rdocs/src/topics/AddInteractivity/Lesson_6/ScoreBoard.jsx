import { useState } from "react";

const ScoreBoard = () => {
  const user = {
    firstName: "Sojib",
    lastName: "Ali",
    score: 10,
  };
  const [person, setPerson] = useState(user);
  //   const [number, setNumber] = useState(10);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPerson((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  return (
    <>
      <p>
        Score:{person.score}
        <button
          onClick={() => setPerson({ ...person, score: person.score + 1 })}
        >
          +1
        </button>
      </p>
      <form action="">
        <label htmlFor="fname">First name: </label>
        <input
          name="firstName"
          type="text"
          value={person.firstName}
          onChange={handleChange}
        />
        <input
          name="lastName"
          type="text"
          value={person.lastName}
          onChange={handleChange}
        />
      </form>
    </>
  );
};

export default ScoreBoard;
