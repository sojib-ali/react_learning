import { useState } from "react";
let nextId = 0;

const Add_arr = () => {
  const [items, setItems] = useState("");
  const [listArray, setListArray] = useState([]);

  function handleClick() {
    setListArray((prev) => [...prev, { id: nextId++, items: items }]);
  }

  return (
    <>
      <div>
        <h1>Inspiring sculptors: </h1>
        <input
          type="text"
          onChange={(e) => setItems(e.target.value)}
          value={items}
        />
        <button onClick={handleClick}>Add</button>
      </div>
      <ul>
        {listArray.map((list) => (
          <li key={list.id}>{list.items}</li>
        ))}
      </ul>
    </>
  );
};

export default Add_arr;
