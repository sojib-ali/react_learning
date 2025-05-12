import Input from "./Input"

const NewProjects = () => {
  return (
    <div>
        <menu>
            <li><button>Cancel</button></li>
            <li><button>Save</button></li>
        </menu>
        <div>
            <Input label="Title"/>
            <Input label="Description" textarea/>
            <Input label="Due date"/>
        </div>
    </div>
  )
}

export default NewProjects