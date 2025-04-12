import { useState } from "react";
const ProductList = ({items, setItems}) => {
  
  const [editingId,setEditingId] = useState(null);
  const [saveItems, setSaveItems] = useState("");
  const [isSelect, setIsSelect] = useState(false);
  const [selectedIds, setSelectedIds] = useState([]);

  function handleDelete(productId){
    //cancelling during editing items
    if(editingId === productId){
      setItems(items.map((product)=>product.id === productId ? product : product))
      setEditingId(null);
    }else{
    //removing an items
      setItems(items.filter((product)=> product.id!== productId));
    }
    
  }

  function handleSave(productId){
    //updating items
    if(editingId === productId){
      setItems(items.map((product)=>product.id == productId ? {...product, listName:saveItems}: product)) 
      setSaveItems("");
      setEditingId(null);
    }else{
      // currentValue flows to saveItems so that input field can show the current items
      let currentValue = items.find((value)=>value.id == productId)
      setSaveItems(currentValue.listName);
      setEditingId(productId);
    }
  }

 function handleBoxChange(productId){
    setSelectedIds(prev =>
      prev.includes(productId)
      ? prev.filter(itemId => itemId !== productId) //uncheck
      : [...prev,productId] // putting check values intor the array
    );
  }
 function handleRemoveSelected(){
    setItems(prev=> prev.filter(item=>!selectedIds.includes(item.id)));
    setSelectedIds([]);
  }
  return (
    <>
        {items.length == 0 ? (<p>Please add items to your list</p>):
        (
        <div style={{padding: "1rem"}}>
        <button onClick={()=>setIsSelect(prev => !prev)}>select</button>
        <button style={{marginInline:"0.5rem"}}>select all</button>
        <button>remove all</button>{" "}
        <button onClick={handleRemoveSelected}>remove selected item</button>
     
        <ul>
            {items.map((product)=>(

                <li key={product.id}>
                  {isSelect && 
                  <input 
                    type="checkbox"
                    checked={selectedIds.includes(product.id)}
                    onChange={()=>handleBoxChange(product.id)}
                    />}{" "}
                  
                  {editingId === product.id? (                   
                    <input type="text"
                    onChange={(e)=>setSaveItems(e.target.value)}
                    value={saveItems} />                  
                  ) : (                 
                   product.listName  
                  )}{" "}
                  <button onClick={()=>handleSave(product.id)}>
                    {editingId === product.id ? "Save": "Edit"}
                    </button>{" "}
                  <button onClick={()=>handleDelete(product.id)}>
                  {editingId === product.id ? "Cancel": "Delete"}
                  </button>
                </li>                             
            ))} 
        </ul> 
        </div>
      )}       
    </>
  )
}

export default ProductList

//make a add bar component