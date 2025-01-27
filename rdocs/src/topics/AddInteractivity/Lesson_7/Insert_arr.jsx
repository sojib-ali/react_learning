import { useState } from "react";

const Insert_arr = () => {
  const initialArtists = [
    { id: 1, name: "Marta Colvin Andrade" },
    { id: 2, name: "Lamidi Olonade Fakeye" },
    { id: 3, name: "Louise Nevelson" },
  ];
  const [artists, setArtists] = useState(initialArtists);
  const [items, setItems] = useState("");

  const handleChange = (e) => {
    setItems(e.target.value);
  };

  const handleClick = () => {
    setArtists([...artists, { id: artists.length + 1, name: items }]);
    setItems("");
  };

  return (
    <>
      <h1>Inspiring sculptors: </h1>
      <input type="text" value={items} onChange={handleChange} />{" "}
      <button onClick={handleClick}>Insert</button>
      <ul>
        {artists.map((artist) => (
          <li key={artist.id}>{artist.name}</li>
        ))}
      </ul>
    </>
  );
};

export default Insert_arr;
