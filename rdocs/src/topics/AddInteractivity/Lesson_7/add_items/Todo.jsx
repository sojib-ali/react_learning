import AddItemBar from "./AddItemBar"

const initialList = [
  // { id: 1, listName: "Buy milk" },
  // { id: 2, listName: "Eat tacos" },
  // { id: 3, listName: "Brew tea" },
]


const Todo = () => {
  return (
    <div>
      <AddItemBar products ={initialList}/>
    </div>
  )
}

export default Todo

