import Link from 'next/link';
import styles from './btn.module.css';

export default function EditButton({taskId}: {taskId: string}) {
    return (
        <Link href = {`/tasks/${taskId}/edit`}
            className={`${styles.button} ${styles.editButton}`}
            aria-label="Edit task"
            title="Edit task"
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className={styles.icon}
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
                />
            </svg>
        </Link>
    );
}