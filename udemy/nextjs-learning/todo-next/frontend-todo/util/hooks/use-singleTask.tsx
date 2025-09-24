'use client';

import { useQuery } from '@tanstack/react-query';
import { fetchTask } from '../http';


interface Task {
  id: number;
  title: string;
}

export default function useSingleTask(taskId: string | number) {
  
  const queryResult = useQuery<Task, Error>({
    queryKey: ['tasks', taskId],
    queryFn: ({signal})=>fetchTask({signal, id: taskId}),
    enabled: !!taskId,
  });

  return queryResult;
}