import { useState } from "react";
import ProductList from "./ProductList";

const AddItemBar = ({products}) => {
const [addNewItem, setAddNewItem] = useState("");
const [newItems, setNewItems] = useState(products);

function addToList(){
  const nextId = Math.max(...newItems.map(item => item.id),0)+1;
    setNewItems(
        // (prev)=>[...prev, {id: prev.length > 0 ? prev[prev.length -1].id +1 : 1, listName:addNewItem}]
        (prev)=>[...prev, {id: prev.length > 0 ? prev[prev.length -1].id +1 : 1, listName:addNewItem}]
    )
    setAddNewItem("");
}

  return (
    <div>
        <input type="text"
            onChange={(e)=>setAddNewItem(e.target.value)}
            value={addNewItem}
            placeholder="add items"
        />{" "}
        <button onClick={addToList}>Add</button>
        <ProductList items={newItems} setItems={setNewItems}/>
    </div>
  )
}

export default AddItemBar