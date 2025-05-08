import { useState } from "react";
import ProjectForm from "./ProjectForm";

export function AddProjects({showProjectForm, setProjectForm}){


  return(
    <>

      {showProjectForm ? 
      
      <ProjectForm /> 
      
      : <p>
          <button onClick={()=>setProjectForm(true)}>Create projects</button>
        </p>
      }
      
    </>
  )
}
// export default AddProjects