import { useState } from "react";

const ProjectForm = ({
    inputValue,
    setInputValue, 
    setSavedProject, 
    savedProject,
    setSelectedProject
    }) => {
    
    const [loading, setLoading] = useState(false);
  
    function handleInput(e){
        const{name, value} =e.target;
        setInputValue((prev)=>({
            ...prev,
            [name]: value,
        }))
    }

    async function handleSave(){
        if(!inputValue.name || !inputValue.dueDate){
            alert("Project title and due date are required.");
            return;
        }
        setLoading(true);

        try{
            const response = await fetch("http://127.0.0.1:8000/projects/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name: inputValue.name,
                    description:inputValue.description,
                    due_date: inputValue.dueDate,
                }),
            });
            
            if(!response.ok){
                throw new Error("Failed to save project");
            }

            const newProject = await response.json();

            const fetchRes = await fetch("http://127.0.0.1:8000/projects/");
            const updatedProjects = await fetchRes.json();

            setSavedProject(updatedProjects);
            setSelectedProject(newProject)

            setInputValue({name: "", description: "", dueDate: ""});
        } catch(error){
            console.error("Error: ", error);
            alert("Something went wrong while saving the project.");
        } finally{
            setLoading(false);
        }
    }
  return (
    <>     
        <div className="project-form_wrapper">
            <form className="project-form" onSubmit={(e)=> e.preventDefault()} action="">
                <div className="form-input">
                    <label htmlFor="">Project Title</label>
                    <input 
                        type="text" 
                        value={inputValue.name} 
                        onChange={handleInput}
                        name="name"
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
                

                {/* <button onClick={()=>{
 
                    setSavedProject([...savedProject, inputValue]);                   
                    setSelectedProject(inputValue)
                    
                }}>Save</button> */}

                <button onClick={handleSave} disabled={loading}>
                    {loading ? "saving..." : "Save"}
                </button>

           
            </div>
        </div>
       
    </>
  )
}

export default ProjectForm