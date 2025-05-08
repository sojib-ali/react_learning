
const Sidebar = ({setProjectForm, inputValue}) => {
  
  return (
    <section>
      <h2>Your Projects</h2>
      <button onClick={()=>setProjectForm(true)}>+Add Projects</button>
      <p>{inputValue.projectTitle}</p>

      {/* <p>map to an array of project list</p> */}
    </section>
  )
}

export default Sidebar