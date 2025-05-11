import { useEffect } from "react";

import ProjectForm from "./ProjectForm";

import noProjectIcon from './../assets/noProjects.png';
import ProjectDetails from "./ProjectDetails";

export function AddProjects({

  inputValue,
  setInputValue,
  setSavedProject,
  selectedProject,
  savedProject,
  setSelectedProject,
  setTasksByProject,
  tasksByProject

}){
  useEffect(() => {
  fetch("http://127.0.0.1:8000/projects/")
    .then((res) => res.json())
    .then((data) => setSavedProject(data));
}, []);
  
  return(
    <>     

      {selectedProject === null ? (
        <div className="no-project">
          <img className="no-projectIcon" src={noProjectIcon} alt="no-project icon" />
          <h3>No Project Selected</h3>
          <p>Select a project or get started with a new one</p>
          <button onClick={()=>{
            setSelectedProject({})
            setInputValue({
              name:"",
              description:"",
              dueDate:"",
            })
          }}>Create projects</button>
        </div>
        ) : (
          selectedProject.name ? (
            <ProjectDetails 
              formValue={selectedProject}
              tasksByProject = {tasksByProject}
              setTasksByProject={setTasksByProject}
              setSelectedProject = {setSelectedProject}
              savedProject = {savedProject}
              setSavedProject = {setSavedProject}
            
            />
          ) : (
            <ProjectForm
              inputValue = {inputValue}
              setInputValue = {setInputValue}
              setSavedProject = {setSavedProject}             
              selectedProject = {selectedProject}
              savedProject = {savedProject}
              setSelectedProject = {setSelectedProject}
            /> 
          )
        )
      }
      
    </>
  )
}
// export default AddProjects