import styles from './page.module.css';
import EditButton from "@/components/task-action/edit-btn";
import DeleteButton from "@/components/task-action/delete-btn";
import TaskList from '@/util/task-list';

interface Task {
    id: number;
    title: string;
}

// async function getTasks(): Promise<Task[]> {
//     try {
//         const res = await fetch('http://127.0.0.1:8000/tasks', {
//             cache: 'no-store' // Ensures we always get the latest data
//         });

//         if (!res.ok) {
//             throw new Error('Failed to fetch tasks');
//         }

//         return res.json();
//     } catch (error) {
//         console.error('Failed to fetch tasks:', error);
//         return []; // Return an empty array on error
//     }
// }

export default async function TaskPage(){
//     const tasks = await getTasks();

    return(
        <main className={styles.container}>
            <h1 className={styles.title}>Your Tasks</h1>
            <TaskList />
        </main>
    )
}