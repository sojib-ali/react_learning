import Forms from "@/components/forms/form";
import styles from '@/app/task-forms/page.module.css';

interface EditTaskPageProps {
    params: {
        taskId: string;
    };
}

export default function EditTaskPage({ params }: EditTaskPageProps) {
    // You can use params.taskId to fetch the existing task data
    // and pre-fill the form in the future.
    return (
        <div className={styles.formContainer}>
            <h2 className={styles.title}>Update Task</h2>
            <Forms isUpdate={true} />
        </div>
    );
}

