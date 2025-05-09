const ProjectDetails = ({formValue}) => {

  return (
    <>
      {/* <div>{formValue?.projectTitle}</div> */}
      {/* <ul>
        {formValue.map((projects)=>(
          <li key={projects.projectTitle}>
            {projects.projectTitle}
          </li>
      ))}  
      </ul> 
            */}
            <ul>
              <li key={formValue.projectTitle}>
                  {formValue.projectTitle}
              </li>
            </ul>
    </>
  )
}

export default ProjectDetails