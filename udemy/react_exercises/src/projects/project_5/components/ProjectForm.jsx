
const ProjectForm = ({
    inputValue,
    setInputValue, 
    setSavedProject, 
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
                    if(savedProject.length > 0){
                        setSelectedProject(savedProject[savedProject.length-1]); 
                    }else{
                        setSelectedProject(null)
                    }
                    }}>Cancel</button>
                

                <button onClick={()=>{
 
                    setSavedProject([...savedProject, inputValue]);                   
                    setSelectedProject(inputValue)
                    
                }}>Save</button>

           
            </div>
        </div>
       
    </>
  )
}

export default ProjectForm