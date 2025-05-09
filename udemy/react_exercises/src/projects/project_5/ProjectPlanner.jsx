import { useState } from 'react';
import './ProjectPlanner.css';
import { AddProjects } from './components/AddProject';
import Sidebar from './components/Sidebar';

const ProjectPlanner = () => {
    const [showProjectForm, setProjectForm] = useState(false);
    const[inputValue, setInputValue] = useState({
        projectTitle:"",
        description:"",
        dueDate:"",
    })
    const[savedProject, setSavedProject] = useState([]);
    const[saveProjects, setSaveProjects] = useState(false);
    const[selectedProject, setSelectedProject] = useState(null)
    
  return (
    <>
        <main className='main-content'>
            <section className='sidebar'>
                <Sidebar 
                    setProjectForm={setProjectForm}
                    savedProject = {savedProject}
                    setSaveProjects ={setSaveProjects}
                    setSavedProject = {setSavedProject}
                    setInputValue = {setInputValue}
                    saveProjects={saveProjects}
                    showProjectForm = {showProjectForm}
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
                    savedProject ={savedProject}
                    selectedProject ={selectedProject}
                />
            </section>
        </main>
    </>
  )
}

export default ProjectPlanner