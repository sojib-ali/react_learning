'use client';

import { useQuery } from '@tanstack/react-query';
import { fetchTasks } from '../http';
import styles from '@/app/tasks/page.module.css';
import EditButton from '@/components/task-action/edit-btn';
import DeleteButton from '@/components/task-action/delete-btn';

interface Task {
  id: number;
  title: string;
}

export default function useTasks() {
  const queryResult = useQuery<Task[], Error>({
    queryKey: ['tasks'],
    queryFn: fetchTasks,
  });

  return queryResult;
}