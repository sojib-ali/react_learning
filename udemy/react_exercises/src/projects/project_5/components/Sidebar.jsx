
import { useState } from "react";
import ProjectDetails from "./ProjectDetails"

const Sidebar = ({setProjectForm, 
  savedProject, 
  setSaveProjects, 
  setSavedProject,
  setInputValue,
  saveProjects,
  showProjectForm,
  setSelectedProject
}) => {



  
  return (
    <section>
      <h2>Your Projects</h2>
      <button onClick={()=>{
        
        setProjectForm(true)
        // setSavedProject(null);
        setSaveProjects(false);
        setInputValue({
          projectTitle:"",
          description:"",
          dueDate:"",
        })
        
      }}
        >+Add Projects</button>
      
      {/* <p onClick={()=>setProjectForm(true)}>
        {savedProject?.projectTitle ?? 'No project added'}
        </p> */}
      {savedProject.length > 0 ? (
        savedProject.map((project) => (
          <p key={project.projectTitle} 
            onClick={() =>{
              // setSaveProjects(true)
              setSelectedProject(project)
              setProjectForm(true)
            
              }}>
              {project.projectTitle}
          </p>
        ))
      ) : (
        <p>No project added</p>
        )}

       {/* {showProjectForm && <ProjectDetails /> } */}

    </section>
  )
}

export default Sidebar