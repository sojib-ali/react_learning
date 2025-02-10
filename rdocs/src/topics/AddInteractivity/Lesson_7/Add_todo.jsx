import { useState } from "react";

const initialList = [
  { id: 1, listName: "Buy milk" },
  { id: 2, listName: "Eat tacos" },
  { id: 3, listName: "Brew tea" },
];

const Add_todo = () => {
  const [newItems, setNewItems] = useState("");
  const [listItems, setListItems] = useState(initialList);
  const [editingId, setEditingId] = useState(null);

  function addClick() {
    setListItems((item) => [
      ...item,
      { id: item.length + 1, listName: newItems },
    ]);
    setNewItems("");
  }

  function removeItems(itemId) {
    setListItems(listItems.filter((item) => item.id !== itemId));
  }

  function editItem(itemId) {
    if (editingId === itemId) {
      setListItems(
        listItems.map((item) =>
          item.id === itemId ? { ...item, listName: newItems } : item
        )
      );
      setEditingId(null);
      setNewItems("");
    } else {
      setEditingId(itemId);
      const currentItem = listItems.find((item) => item.id === itemId);
      setNewItems(currentItem.listName);
    }
  }
  return (
    <>
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          onChange={(e) => setNewItems(e.target.value)}
          value={newItems}
          placeholder="add item"
        />{" "}
        <button onClick={addClick}>Add</button>
      </form>
      <ul>
        {listItems.map((listItem) => (
          <li key={listItem.id}>
            {editingId === listItem.id ? (
              <input
                type="text"
                onChange={(e) => setNewItems(e.target.value)}
                value={newItems}
              />
            ) : (
              listItem.listName
            )}
            <button onClick={() => editItem(listItem.id)}>
              {editingId === listItem.id ? "Save" : "Edit"}
            </button>{" "}
            <button onClick={() => removeItems(listItem.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Add_todo;
