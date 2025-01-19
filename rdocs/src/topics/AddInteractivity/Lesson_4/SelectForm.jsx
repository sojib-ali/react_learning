import { useState } from "react";

const SelectForm = () => {
  const [message, setMessage] = useState("");
  const [person, setPerson] = useState("Lukas Kyle");

  const handleSend = (e) => {
    e.preventDefault();
    alert(`${message} to ${person}`);
  };
  return (
    <>
      <form onSubmit={handleSend}>
        <label htmlFor="person">To:</label>
        <select name="" id="" onChange={(e) => setPerson(e.target.value)}>
          <option value="Lukas Kyle">Lukas Kyle</option>
          <option value="Juliette Nicholas">Juliette Nicholas</option>
          <option value="solo">Solo</option>
        </select>
        <br /> <br />
        <textarea
          name=""
          id=""
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
        <br />
        {/* <input type="submit" value="send" onClick={handleSend} /> */}
        <button type="submit">Send</button>
      </form>
    </>
  );
};

export default SelectForm;
