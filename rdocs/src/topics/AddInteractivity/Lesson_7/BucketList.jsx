import { useState } from "react";

const BucketList = () => {
  const initialList = [
    { id: 1, name: "Big Bellies" },
    { id: 2, name: "Lunar Landscape" },
    { id: 3, name: "Terracotta Army" },
  ];

  const [listItem, setListItem] = useState(initialList);

  return (
    <>
      <h1>Art Bucket List</h1>
      <h2>My list of art to see: </h2>
      <ul>
        {listItem.map((item) => (
          <li key={item.id}>
            <input type="checkbox" />
            <label htmlFor="">{item.name}</label>
          </li>
        ))}
      </ul>
    </>
  );
};

export default BucketList;
