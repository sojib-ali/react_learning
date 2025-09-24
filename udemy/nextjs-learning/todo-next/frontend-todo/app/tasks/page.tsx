'use client';

import styles from './page.module.css';
import EditButton from "@/components/task-action/edit-btn";
import DeleteButton from "@/components/task-action/delete-btn";
import useTasks from '@/util/hooks/use-task';
import Link from 'next/link';


interface Task {
    id: number;
    title: string;
}

export default function TaskPage(){
   const {
    data: tasks,
    isLoading,
    isError,
    error,
  } = useTasks();

  let content;

  if(isLoading){
    content = <p>Loading tasks...</p>
  }

  if(isError){
    content = <p>Error fetching task: {error.message}</p>
  }

  if (tasks) {
        content = (
            <ul className={styles.taskList}>
                {tasks.map((task: Task) => (
                    <li key={task.id} className={styles.taskItem}>
                        <span>{task.title}</span>
                        <div className={styles.buttonGroup}>
                            <EditButton taskId={String(task.id)} />
                            <DeleteButton taskId={String(task.id)} />
                        </div>
                    </li>
                ))}
            </ul>
        );
    }


    return(
        <main className={styles.container}>
            <h1 className={styles.title}>Your Tasks</h1>
            <Link href={'/task-forms'} className={styles.addbtn} > Add Task </Link>
            {content}
        </main>
    )
}