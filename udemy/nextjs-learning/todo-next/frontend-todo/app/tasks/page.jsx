import { tasks } from "@/util/task";
import styles from './page.module.css';
import EditButton from "@/components/task-action/edit-btn";
import DeleteButton from "@/components/task-action/delete-btn";

export default function TaskPage(){
    return(
        <main className={styles.container}>
            <h1 className={styles.title}>Your Tasks</h1>
            {tasks.length > 0 ? (
                <ul className={styles.taskList}>
                    {tasks.map((task) => (
                        <li key={task.id} className={styles.taskItem}>
                            <span>{task.title}</span>
                            <div className={styles.buttonGroup}>
                                <EditButton taskId = {task.id} />
                                <DeleteButton />
                            </div>
                        </li>
                    ))}
                </ul>
            ) : (
                <p className={styles.noTasks}>You have no tasks yet. Add one!</p>
            )}
        </main>
    )
}