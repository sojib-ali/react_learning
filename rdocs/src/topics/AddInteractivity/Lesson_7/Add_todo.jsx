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
  const [saveItems, setSaveItems] = useState("");

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
          item.id === itemId ? { ...item, listName: saveItems } : item
        )
      );
      setEditingId(null);
      setSaveItems("");
    } else {
      setEditingId(itemId);
      const currentItem = listItems.find((item) => item.id === itemId);
      setSaveItems(currentItem.listName);
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
                onChange={(e) => setSaveItems(e.target.value)}
                value={saveItems}
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

// take 3 handler into a separate file and pass it as props
// fix the input field issues
// add checklists and once two or three items are selected, should be able to delete
