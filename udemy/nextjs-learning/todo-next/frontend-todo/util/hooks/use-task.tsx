'use client';

import { useQuery } from '@tanstack/react-query';
import { fetchTasks } from '../http';

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