import Forms from "@/components/forms/form";
import styles from '@/app/task-forms/page.module.css';
import { tasks } from '@/util/task';

interface EditTaskPageProps {
    params: {
        taskId: string;
    };
}

async function getTaskById(id: string) {
    // The id from params is a string, but in our mock data it's a number.
    const taskId = parseInt(id, 10);
    const task = tasks.find(task => task.id === taskId);
    return task;
}

export default async function EditTaskPage({ params }: EditTaskPageProps) {
    const task = await getTaskById(params.taskId);

    if (!task) {
        return <div>Task not found.</div>;
    }

    return (
        <div className={styles.formContainer}>
            <h2 className={styles.title}>Update Task</h2>
            <Forms isUpdate={true} taskName={task.title} />
        </div>
    );
}
