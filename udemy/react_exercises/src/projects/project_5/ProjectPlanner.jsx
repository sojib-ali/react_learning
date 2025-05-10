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
    const [showProjectForm, setProjectForm] = useState(false);
    const[savedProject, setSavedProject] = useState([]);
    const[saveProjects, setSaveProjects] = useState(false);
    const[selectedProject, setSelectedProject] = useState("")
    
  return (
    <>
        <main className='main-content'>
            <section className='sidebar'>
                <Sidebar 
                    setProjectForm={setProjectForm}
                    savedProject = {savedProject}
                    setSaveProjects ={setSaveProjects}                   
                    setInputValue = {setInputValue}          
                    setSelectedProject = {setSelectedProject}

                />
            </section>

            <section className='project-details'>
                <AddProjects 
                    showProjectForm={showProjectForm} setProjectForm={setProjectForm}
                    inputValue = {inputValue}
                    setInputValue = {setInputValue}
                    setSavedProject = {setSavedProject}
                    setSaveProjects ={setSaveProjects}
                    saveProjects = {saveProjects}
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