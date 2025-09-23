import Forms from "@/components/forms/form";
import styles from '@/app/task-forms/page.module.css';

interface EditTaskPageProps {
    params: {
        taskId: string;
    };
}

interface Task {
    id: number;
    title: string;
}

async function getTaskById(id: string): Promise<Task | null> {
    try {
        const res = await fetch(`http://127.0.0.1:8000/task/${id}`, {
            cache: 'no-store' // Ensures we always get the latest data
        });
        if (!res.ok) {
            return null;
        }
        return res.json();
    } catch (error) {
        console.error("Failed to fetch task:", error);
        return null;
    }
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
