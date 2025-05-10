import { useState, useRef } from "react";
import "./ProjectDetails.css";

const ProjectDetails = ({
  formValue,
  setTasksByProject,
  tasksByProject,
  setSelectedProject,
  setSavedProject,
  savedProject
}) => {

  
  const taskName = useRef();
  const taskId = useRef(0);

  const projectId = formValue.projectTitle;

  function handleAddTask(){
    const name = taskName.current.value.trim();
    if(!name) return;

    const newTask = {id:taskId.current++, name}

    setTasksByProject(prev =>({
      ...prev,[projectId]:[...(prev[projectId] || []), newTask]
    }));

    taskName.current.value = "";
  }

  const currentTasks = tasksByProject[projectId] || [];

  function handleClearTask(taskId){
    setTasksByProject(prev =>({
      ...prev,
      [projectId]:prev[projectId].filter(task => task.id !== taskId)
    }));
  }

  function handleDeleteProject(){
    const updatedProjects = savedProject.filter(
      project => project.projectTitle !== formValue.projectTitle
    );

    setSavedProject(updatedProjects);

    if(updatedProjects.length > 0){
      setSelectedProject(updatedProjects[0]);
    }else{
      setSelectedProject(null);
    }
  }

  return (
    <>
      <section className="project-info">
        <div className="item">
          <h2>{formValue.projectTitle}</h2>
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

        <button onClick={handleAddTask}>Add task</button>

        <ul className="taskList">
        {currentTasks.map ((task)=>(
          <div key={task.id} className="taskList-item">
            <li >{task.name}</li>
            <button onClick={()=>handleClearTask(task.id)} className="task-button">Clear</button>
          </div>
         ))}
         </ul>
       </section>
    </>
  )
}

export default ProjectDetails