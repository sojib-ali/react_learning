import NewProjects from "./components/NewProjects"
import ProjectSidebar from "./components/ProjectSidebar"
import NoProjectSelected from "./components/NoProjectSelected"
import { useState } from "react"
import SelectedProject from "./components/SelectedProject"

const ProjectDashboard = () => {

  const [projectState, setProjectState] = useState({
    selectedProjectId: undefined,
    projects:[],
    tasks:[]
  })

function handleAddTask(text) {
  setProjectState((prevState) => {
    const taskId = Math.random();
    const newTask = {
      text: text,
      projectID: prevState.selectedProjectId,
      id: taskId,
    };
    return {
      ...prevState,
      tasks: [newTask, ...prevState.tasks],
    };
  });
}


  function handleDeleteTask(id){
    setProjectState((prevState)=>{
      return{
        ...prevState,
        tasks: prevState.tasks.filter((task)=>task.id !== id),
      }
    })
  }

  function handleSelectProject(id){
    setProjectState((prevState)=>({
      ...prevState,
      selectedProjectId:id
    }))
  }

  function handleStartAddProject(){
    setProjectState((prevState)=>({
      ...prevState,
      selectedProjectId:null
    }))
  }

  function handleCancelProject(){
    setProjectState((prevState)=>({
      ...prevState,
      selectedProjectId:undefined
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
      projects:[...prevState.projects, newProjects]
    }))
  }

  function handleDeleteProject(){
      setProjectState((prevState)=>({
      ...prevState,
      selectedProjectId:undefined,
      projects: prevState.projects.filter(
        project => project.id !== prevState.selectedProjectId
      )
    }))
  }


  const selectedProject = projectState.projects.find(
    project => project.id === projectState.selectedProjectId
  )
  let content;
  if (projectState.selectedProjectId === null){
    content = <NewProjects onAdd={handleAddProject} onCancel={handleCancelProject}/>
  }else if(projectState.selectedProjectId === undefined){
    content = <NoProjectSelected onStartAddProject={handleStartAddProject}/>
  }else{
    content =(
      <SelectedProject 
        project={selectedProject} 
        onDelete = {handleDeleteProject}
        onAddTask = {handleAddTask}
        onDeleteTask = {handleDeleteTask}
        tasks = {projectState.tasks}
      />
    );
  }

  return (
    <main className="h-screen my-8 flex gap-8">
        <ProjectSidebar 
          onStartAddProject={handleStartAddProject} 
          projects = {projectState.projects}
          onSelectProject = {handleSelectProject}
          selectedProjectId = {projectState.selectedProjectId}
        />
        {content}
    </main>
  )
}

export default ProjectDashboard