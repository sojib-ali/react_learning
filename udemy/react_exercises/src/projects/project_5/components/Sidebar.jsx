
const Sidebar = ({
  savedProject,  
  setInputValue,
  setSelectedProject
}) => {
  return (
    <section>
      <h2>Your Projects</h2>
      <button onClick={()=>{
        setSelectedProject({})
        setInputValue({
          name:"",
          description:"",
          dueDate:"",
        })
        
      }}
        >+Add Projects</button>

      {savedProject.length > 0 ? (
        savedProject.map((project) => (
          <p key={project.id} 
            onClick={() =>{
              setSelectedProject(project)            
              }}>
              {project.name}
          </p>
        ))
      ) : (
        <p>No project added</p>
        )}

    </section>
  )
}

export default Sidebar