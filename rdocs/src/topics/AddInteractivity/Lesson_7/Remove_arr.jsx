import { useState } from "react";

const Remove_arr = () => {
  let initialList = [
    { id: 1, name: "hello" },
    { id: 2, name: "ola" },
  ];

  const [listItem, setListItem] = useState(initialList);

  const handleRemove = (id) => {
    setListItem(listItem.filter((item) => item.id !== id)); // if true, then remove
  };

  return (
    <div>
      <ul>
        {listItem.map((list) => (
          <li key={list.id}>
            {list.name}{" "}
            <button onClick={() => handleRemove(list.id)}>remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Remove_arr;
