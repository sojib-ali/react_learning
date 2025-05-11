import { useState, useEffect } from 'react';
import './ProjectPlanner.css';
import { AddProjects } from './components/AddProject';
import Sidebar from './components/Sidebar';

const ProjectPlanner = () => {
    const[inputValue, setInputValue] = useState({
        name:"",
        description:"",
        dueDate:"",
    })
    const[savedProject, setSavedProject] = useState([]);
    const[selectedProject, setSelectedProject] = useState(null);
    const[tasksByProject, setTasksByProject] = useState({});

    useEffect(()=>{
        fetch("http://127.0.0.1:8000/projects/")
        .then((res)=>res.json())
        .then((data) =>{
            console.log("Fetched projects: ", data);
            setSavedProject(data);
            setSelectedProject(data[0] || null);
        })
        .catch((err) => console.error("Error loading projects:", err));
    },[]);
    
  return (
    <>
        <main className='main-content'>
            <section className='sidebar'>
                <Sidebar 
                    savedProject = {savedProject}                  
                    setInputValue = {setInputValue}          
                    setSelectedProject = {setSelectedProject}
                />
            </section>

            <section className={!selectedProject ? 'default-project' : 'project-details'}>
                <AddProjects 
                    inputValue = {inputValue}
                    setInputValue = {setInputValue}
                    setSavedProject = {setSavedProject}
                    selectedProject ={selectedProject}
                    savedProject = {savedProject}
                    setSelectedProject = {setSelectedProject}
                    tasksByProject = {tasksByProject}
                    setTasksByProject={setTasksByProject}

                />
            </section>
        </main>
    </>
  )
}

export default ProjectPlanner