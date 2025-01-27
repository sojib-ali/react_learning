import { useState } from "react";

const ReverseList = () => {
  const initialList = [
    { id: 1, name: "Big Bellies" },
    { id: 2, name: "Lunar Landscape" },
    { id: 3, name: "Terracotta Army" },
  ];

  const [items, setItems] = useState(initialList);

  function handleClick() {
    const revList = [...items];
    setItems(revList.reverse());
  }
  return (
    <div>
      <button onClick={handleClick}>Reverse</button>
      <ul>
        {items.map((prod) => (
          <li key={prod.id}>{prod.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ReverseList;
