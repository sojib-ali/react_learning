import { useState } from "react";
import ProjectForm from "./ProjectForm";

import noProjectIcon from './../assets/noProjects.png'
export function AddProjects({
  showProjectForm,
  setProjectForm,
  inputValue,
  setInputValue,
  setSavedProject,
  setSaveProjects,
  saveProjects,
  savedProject,
  selectedProject
}){
  // const [createProject, setCreateProject] = useState(false);


  return(
    <>

      {showProjectForm  ? 
      
      <ProjectForm 
        inputValue = {inputValue}
        setInputValue = {setInputValue}
        setSavedProject = {setSavedProject}
        setProjectForm = {setProjectForm}
        
        saveProjects = {saveProjects}
        setSaveProjects ={setSaveProjects}
        savedProject = {savedProject}
        selectedProject = {selectedProject}
      /> 
      
      : <div className="no-project">
          <img className="no-projectIcon" src={noProjectIcon} alt="no-project icon" />
          <h3>No Project Selected</h3>
          <p>Select a project or get started with a new one</p>
          <button onClick={()=>setProjectForm(true)}>Create projects</button>
        </div>
      }
      
    </>
  )
}
// export default AddProjects