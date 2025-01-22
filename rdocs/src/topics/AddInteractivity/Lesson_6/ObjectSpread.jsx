import { useState } from "react";

const ObjectSpread = () => {
  const user = {
    name: "Sojib Ali",
    artwork: {
      title: "Blue Nana",
      city: "Hamburg",
      image: "https://i.imgur.com/Sd1AgUOm.jpg",
    },
  };
  const [person, setPerson] = useState(user);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "name") {
      setPerson((prev) => ({
        ...prev,
        [name]: value,
      }));
    } else {
      setPerson((prev) => ({
        ...prev,
        artwork: {
          ...prev.artwork,
          [name]: value,
        },
      }));
    }
  };

  return (
    <>
      <form action="">
        <label htmlFor="name">Name: </label>
        <input
          type="text"
          value={person.name}
          placeholder="full name"
          onChange={handleChange}
          name="name"
        />
        <br />
        <br />
        <label htmlFor="name">title: </label>
        <input
          type="text"
          value={person.artwork.title}
          placeholder="title"
          onChange={handleChange}
          name="title"
        />
        <br />
        <br />
        <label htmlFor="name">city: </label>
        <input
          type="text"
          value={person.artwork.city}
          placeholder="city"
          onChange={handleChange}
          name="city"
        />
      </form>

      <br />
      <div>
        {person.name} {person.artwork.title} {person.artwork.city}
      </div>
    </>
  );
};

export default ObjectSpread;
