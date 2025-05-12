import NewProjects from "./components/NewProjects"
import ProjectSidebar from "./components/ProjectSidebar"

const ProjectDashboard = () => {
  return (
    <main className="h-screen my-8 flex gap-8">
        <ProjectSidebar/>
        <NewProjects />
    </main>
  )
}

export default ProjectDashboard