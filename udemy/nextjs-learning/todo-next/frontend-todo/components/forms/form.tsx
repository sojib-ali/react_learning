import styles from './form.module.css';

interface FormsProps {
    isUpdate?: boolean;
    taskName?: string;
}


export default function Forms({ isUpdate = false, taskName }: FormsProps) {

    const button = isUpdate ? (
        <button className={styles.taskAddButton}>Update Task</button>
    ):(
         <button className={styles.taskAddButton}>Add task</button>
    )
    
    return (
        <>
            <form action="" className={styles.form}>
                <div className={styles.formGroup}>
                    <label htmlFor="taskName">Task name</label>
                    <input
                        type="text"
                        id="taskName"
                        name="taskName"
                        className={styles.input}
                        placeholder="e.g., Buy groceries"
                        defaultValue={taskName}
                        required
                    />
                </div>
                 <div className={styles.buttonGroup}>
                    {button}
                </div> 
            </form>
        </>
    )
}