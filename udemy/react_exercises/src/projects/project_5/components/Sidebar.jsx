
import { useState } from "react";
import ProjectDetails from "./ProjectDetails"

const Sidebar = ({
  setProjectForm, 
  savedProject, 
  setSaveProjects, 
  setInputValue,
  setSelectedProject
}) => {
  return (
    <section>
      <h2>Your Projects</h2>
      <button onClick={()=>{
        
        setProjectForm(true)
        setSaveProjects(false);
        setInputValue({
          projectTitle:"",
          description:"",
          dueDate:"",
        })
        
      }}
        >+Add Projects</button>

      {savedProject.length > 0 ? (
        savedProject.map((project) => (
          <p key={project.projectTitle} 
            onClick={() =>{
              setSelectedProject(project)
              setProjectForm(true)
              setSaveProjects(true)
            
              }}>
              {project.projectTitle}
          </p>
        ))
      ) : (
        <p>No project added</p>
        )}

    </section>
  )
}

export default Sidebar