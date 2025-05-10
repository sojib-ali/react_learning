import { useState } from "react"
import ProjectDetails from "./ProjectDetails";

const ProjectForm = ({
    inputValue,
    setInputValue, 
    setSavedProject, 
    setProjectForm,
    saveProjects,
    setSaveProjects,
    selectedProject,
    savedProject,
    setSelectedProject
    }) => {
  
    function handleInput(e){
        const{name, value} =e.target;
        setInputValue((prev)=>({
            ...prev,
            [name]: value,
        }))
    }
  return (
    <>
     {saveProjects ? 
        <div>
            <ProjectDetails formValue={selectedProject}/>
        </div>
        :
        <div className="project-form_wrapper">
            <form className="project-form" action="">
                <div className="form-input">
                    <label htmlFor="">Project Title</label>
                    <input 
                        type="text" 
                        value={inputValue.projectTitle} 
                        onChange={handleInput}
                        name="projectTitle"
                    />
                </div>
                
                <div className="form-input">
                    <label htmlFor="">Description</label>
                    <textarea 
                        type="text"
                        name="description"
                        value={inputValue.description}
                        onChange={handleInput}
                    />
                </div>

                <div className="form-input">
                    <label htmlFor="">Due Date</label>
                    <input 
                        type="date"
                        name="dueDate"
                        value={inputValue.dueDate}
                        onChange={handleInput}
                    />
                </div>
            </form>
            <div className="form-button">
                <button onClick={()=>{
                    setProjectForm(false) 
                    }}>Cancel</button>
                

                <button onClick={()=>{
                    setSavedProject((prev) => [...prev, inputValue]);
                    setSaveProjects(true);
                    setProjectForm(true);
                    setSelectedProject(inputValue)
                    
                }}>Save</button>

           
            </div>
        </div>
        }
       
    </>
  )
}

export default ProjectForm