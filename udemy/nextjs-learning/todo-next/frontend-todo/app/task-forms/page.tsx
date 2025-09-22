import TaskFormSubmit from "@/components/tasks/task-form-submit";
import styles from './page.module.css'


export default function TaskForms(){
    return(
        <div className={styles.formContainer}>
            <h2 className={styles.title}>Add a New Task</h2>
            <form action="" className={styles.form}>
                <div className={styles.formGroup}>
                    <label htmlFor="taskName">Task name</label>
                    <input
                        type="text"
                        id="taskName"
                        name="taskName"
                        className={styles.input}
                        placeholder="e.g., Buy groceries"
                        required
                    />
                </div>
                <div className={styles.buttonGroup}>
                    <TaskFormSubmit />
                </div>
            </form>
        </div>
    )
}