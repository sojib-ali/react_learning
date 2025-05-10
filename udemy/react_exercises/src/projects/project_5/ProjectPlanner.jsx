import { useState } from 'react';
import './ProjectPlanner.css';
import { AddProjects } from './components/AddProject';
import Sidebar from './components/Sidebar';

const ProjectPlanner = () => {
    const[inputValue, setInputValue] = useState({
        projectTitle:"",
        description:"",
        dueDate:"",
    })
    const[savedProject, setSavedProject] = useState([]);
    const[selectedProject, setSelectedProject] = useState(null);
    const[tasksByProject, setTasksByProject] = useState({});
    
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