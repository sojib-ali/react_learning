import TaskFormSubmit from "@/components/tasks/task-form-submit";
import styles from './page.module.css'
import Forms from "@/components/forms/form";


export default function TaskForms(){
    return(
        <div className={styles.formContainer}>
            <h2 className={styles.title}>Add a New Task</h2>
            <Forms/>
        </div>
    )
}