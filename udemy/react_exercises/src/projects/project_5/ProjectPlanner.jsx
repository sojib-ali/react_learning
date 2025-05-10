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

            <section className='project-details'>
                <AddProjects 
                    inputValue = {inputValue}
                    setInputValue = {setInputValue}
                    setSavedProject = {setSavedProject}
                    selectedProject ={selectedProject}
                    savedProject = {savedProject}
                    setSelectedProject = {setSelectedProject}
                />
            </section>
        </main>
    </>
  )
}

export default ProjectPlanner