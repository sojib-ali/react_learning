import { useState } from "react";

const ObejctForm = () => {
  const user = {
    firstname: "Sojib",
    lastname: "Ali",
    email: "thesojibali@gmail.com",
  };
  const [person, setPerson] = useState(user);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPerson((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  return (
    <>
      <form action="">
        <label htmlFor="fname">First name: </label>
        <input
          type="text"
          name="firstname"
          placeholder="First name"
          onChange={handleChange}
          value={person.firstname}
        />
        <br /> <br />
        <label htmlFor="lname">Last name: </label>
        <input
          type="text"
          name="lastname"
          placeholder="Last name"
          onChange={handleChange}
          value={person.lastname}
        />
        <br /> <br />
        <label htmlFor="email">Email: </label>
        <input
          type="email"
          name="email"
          placeholder="email"
          onChange={handleChange}
          value={person.email}
        />
      </form>
      <div>
        <br />
        {person.firstname} {person.lastname} {person.email}
      </div>
    </>
  );
};

export default ObejctForm;
