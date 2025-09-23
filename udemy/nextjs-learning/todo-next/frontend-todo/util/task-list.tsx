'use client';

import { useQuery } from '@tanstack/react-query';
import { fetchTasks } from './http';
import styles from '@/app/tasks/page.module.css';
import EditButton from '@/components/task-action/edit-btn';
import DeleteButton from '@/components/task-action/delete-btn';

interface Task {
  id: number;
  title: string;
}

export default function TaskList() {
  const {
    data: tasks,
    isLoading,
    isError,
    error,
  } = useQuery<Task[], Error>({
    queryKey: ['tasks'],
    queryFn: fetchTasks,
  });

  if (isLoading) {
    return <p>Loading tasks...</p>;
  }

  if (isError) {
    return <p>Error fetching tasks: {error.message}</p>;
  }

  return (
    <ul className={styles.taskList}>
      {tasks?.map((task) => (
        <li key={task.id} className={styles.taskItem}>
          <span>{task.title}</span>
          <div className={styles.buttonGroup}>
            <EditButton taskId={String(task.id)} />
            <DeleteButton />
          </div>
        </li>
      ))}
    </ul>
  );
}