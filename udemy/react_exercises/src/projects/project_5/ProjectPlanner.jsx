import { useState, useRef } from 'react';
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
    // const inputValue = useRef({
    //     projectTitle:"",
    //     description:"",
    //     dueDate:"",
    // })
  return (
    <>
        <main className='main-content'>
            <section className='sidebar'>
                <Sidebar 
                    setProjectForm={setProjectForm}
                    inputValue = {inputValue}
                />
            </section>

            <section className='project-details'>
                <AddProjects 
                    showProjectForm={showProjectForm} setProjectForm={setProjectForm}
                    inputValue = {inputValue}
                    setInputValue = {setInputValue}
                />
            </section>
        </main>
    </>
  )
}

export default ProjectPlanner