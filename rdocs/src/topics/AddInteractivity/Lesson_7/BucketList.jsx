import { useState } from "react";

const initialList = [
  { id: 0, title: "Big Bellies", seen: false },
  { id: 1, title: "Lunar Landscape", seen: false },
  { id: 2, title: "Terracotta Army", seen: true },
];

const BucketList = () => {
  const [myList, setMyList] = useState(initialList);
  const [yourList, setYourList] = useState(initialList);

  function handleMyList(artworkId, nextSeen) {
    setMyList(
      myList.map((list) => {
        if (list.id === artworkId) {
          return { ...list, seen: nextSeen };
        } else {
          return list;
        }
      })
    );
  }

  function handleYourList(artworkId, nextSeen) {
    setYourList(
      yourList.map((list) => {
        if (list.id === artworkId) {
          return { ...list, seen: nextSeen };
        } else {
          return list;
        }
      })
    );
  }

  return (
    <>
      <h1>Art Bucket List</h1>
      <h2>My list of art to see: </h2>
      <ItemList artworks={myList} onToggle={handleMyList} />

      <h2>Your list of art to see:</h2>
      <ItemList artworks={yourList} onToggle={handleYourList} />
    </>
  );
};

const ItemList = ({ artworks, onToggle }) => {
  return (
    <ul>
      {artworks.map((item) => (
        <li key={item.id}>
          <label htmlFor="">
            <input
              type="checkbox"
              checked={item.seen}
              onChange={(e) => {
                onToggle(item.id, e.target.checked);
              }}
            />
            {item.title}
          </label>
        </li>
      ))}
    </ul>
  );
};

export default BucketList;
