import { useState } from 'react';
import './ProjectPlanner.css';
import { AddProjects } from './components/AddProject';
import Sidebar from './components/Sidebar';

const ProjectPlanner = () => {
    const [showProjectForm, setProjectForm] = useState(false);
  return (
    <>
        <main className='main-content'>
            <section className='sidebar'>
                <Sidebar setProjectForm={setProjectForm}/>
            </section>

            <section className='project-details'>
                <AddProjects showProjectForm={showProjectForm} setProjectForm={setProjectForm}/>
            </section>
        </main>
    </>
  )
}

export default ProjectPlanner