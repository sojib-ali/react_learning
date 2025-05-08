
const Sidebar = ({setProjectForm}) => {
  
  return (
    <section>
      <h2>Your Projects</h2>
      <button onClick={()=>setProjectForm(true)}>+Add Projects</button>

      {/* <p>map to an array of project list</p> */}
    </section>
  )
}

export default Sidebar