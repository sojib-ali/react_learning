
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
              projectTitle:"",
              description:"",
              dueDate:"",
            })
          }}>Create projects</button>
        </div>
        ) : (
          selectedProject.projectTitle ? (
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