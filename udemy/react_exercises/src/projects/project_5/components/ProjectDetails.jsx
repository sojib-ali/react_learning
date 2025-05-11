import { useState, useRef, useEffect } from "react";
import "./ProjectDetails.css";

const ProjectDetails = ({
  formValue,
  setTasksByProject,
  tasksByProject,
  setSelectedProject,
  setSavedProject,
  savedProject
}) => {

  const [loading, setLoading] = useState(false);
  const taskName = useRef();
  // const taskId = useRef(0);

  const projectId = formValue.id;
  // const taskId = formValue.tasks.id;

   useEffect(() => {
    async function fetchTasks() {
      try {
        const response = await fetch(`http://127.0.0.1:8000/projects/${projectId}/tasks/`);
        if (!response.ok) {
          throw new Error("Failed to fetch tasks");
        }

        const data = await response.json(); // Expecting an array of tasks

        setTasksByProject(prev => ({
          ...prev,
          [projectId]: data,
        }));
      } catch (error) {
        console.error("Error fetching tasks:", error);
      }
    }

    // 🧠 Only fetch if tasks for this project aren't already loaded
    if (projectId && !(projectId in tasksByProject)) {
      fetchTasks();
    }
  }, [projectId, tasksByProject, setTasksByProject]);

  
  async function handleAddTask(){
    const name = taskName.current.value.trim();
    if(!name) return;

    setLoading(true);

    try{
      const response = await fetch(`http://127.0.0.1:8000/projects/${projectId}/tasks/`, {
        method: "POST",
        headers:{
          "Content-Type": "application/json",
        },
        body:JSON.stringify({
          name,
          // project_id: projectId,
        }),
      });

      if(!response.ok){
        throw new Error("Failed to add task");
      }

      // const responseData = await response.json();

      // const newTask = responseData.tasks?.[responseData.tasks.length - 1];

      const newTask = await response.json();

     

      if(!newTask){
        throw new Error("Task not found in response");
      }

      setTasksByProject(prev =>({
      ...prev,[projectId]:[...(prev[projectId] || []), newTask]
    }));

    taskName.current.value = "";

    } catch (error){
      console.error("Error:", error);
    } finally{
      setLoading(false);
    }
  }

  const currentTasks = tasksByProject[projectId] || [];
  console.log(currentTasks)

  // function handleClearTask(taskId){
  //   setTasksByProject(prev =>({
  //     ...prev,
  //     [projectId]:prev[projectId].filter(task => task.id !== taskId)
  //   }));
  // }

  async function handleClearTask(taskId) {
  try {
    // Send a DELETE request to remove the task from the database
    const response = await fetch(`http://127.0.0.1:8000/tasks/${taskId}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      throw new Error("Failed to delete task from database");
    }

    // Remove the task from the state after it's successfully deleted from the database
    setTasksByProject(prev => ({
      ...prev,
      [projectId]: prev[projectId].filter(task => task.id !== taskId),
    }));
  } catch (error) {
    console.error("Error deleting task:", error);
  }
}


  function handleDeleteProject(){
    const updatedProjects = savedProject.filter(
      project => project.name !== formValue.name
    );

    setSavedProject(updatedProjects);

    if(updatedProjects.length > 0){
      setSelectedProject(updatedProjects[0]);
    }else{
      setSelectedProject(null);
    }
  }

  function handleEditTask(){

  }

  return (
    <>
      <section className="project-info">
        <div className="item">
          <h2>{formValue.name}</h2>
          <strong className="due-date">{formValue.dueDate}</strong>
          <p>{formValue.description}</p>
        </div>
        <div className="item project-btn">
          <button 
            onClick={handleDeleteProject}
            className="delete-btn">Delete</button>{" "}
          <button className="edit-btn">Edit</button>
        </div>
      </section>
       <hr className=" item horizontal-line" />

       <section>
        <h2>Tasks</h2>

        <input
          ref={taskName}
          type="text" />{" "}

        <button 
          onClick={handleAddTask} 
          disabled={loading}>
          {loading ? "Adding..." : "Add task"}
          </button>

        <ul className="taskList">
        {currentTasks.map ((task)=>(
          <div key={task.id} className="taskList-item">
            <li >{task.name}</li>
            <button onClick={()=>handleClearTask(task.id)} className="task-button">Clear</button>
            <button onClick={handleEditTask}>Edit</button>
          </div>
         ))}
        </ul>
       </section>
    </>
  )
}

export default ProjectDetails