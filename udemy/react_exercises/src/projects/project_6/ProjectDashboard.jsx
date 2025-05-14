import NewProjects from "./components/NewProjects"
import ProjectSidebar from "./components/ProjectSidebar"
import NoProjectSelected from "./components/NoProjectSelected"
import { useState } from "react"

const ProjectDashboard = () => {

  const [projectState, setProjectState] = useState({
    selectedProjectId: undefined,
    projects:[]
  })

  function handleStartAddProject(){
    setProjectState((prevState)=>({
      ...prevState,
      selectedProjectId:null
    }))
  }

  function handleAddProject(projectData){
    const projectID = Math.random();
    const newProjects = {
      ...projectData,
      id: projectID
    }
    setProjectState((prevState)=>({
      ...prevState,
      selectedProjectId:undefined,
      projects:([...prevState.projects, newProjects])
    }))
  }


  let content;
  if (projectState.selectedProjectId === null){
    content = <NewProjects onAdd={handleAddProject}/>
  }else if(projectState.selectedProjectId === undefined){
    content = <NoProjectSelected onStartAddProject={handleStartAddProject}/>

  }

  return (
    <main className="h-screen my-8 flex gap-8">
        <ProjectSidebar onStartAddProject={handleStartAddProject} projects = {projectState.projects} />
        {content}
    </main>
  )
}

export default ProjectDashboard