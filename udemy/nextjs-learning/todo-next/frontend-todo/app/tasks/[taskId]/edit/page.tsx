'use client'

import Forms from "@/components/forms/form";
import styles from '@/app/task-forms/page.module.css';
import useSingleTask from "@/util/hooks/use-singleTask";
import {use} from "react";

interface EditTaskPageProps {
    params: {
        taskId: string;
    };
}

interface Task {
    id: number;
    title: string;
}

export default function EditTaskPage({params}: {params: Promise<{taskId: string}>}) {

  const {taskId} = use(params);

    const {
    data: task,
    isLoading,
    isError,
    error,
  } = useSingleTask(taskId);



  if(isLoading){
   return <p>Loading tasks...</p>
  }

  if(isError){
    return <p>Error fetching task: {error.message}</p>
  }

  if(!task){
    return <p>Task not found</p>
  }
    
    return (
        <div className={styles.formContainer}>
            <h2 className={styles.title}>Update Task</h2>
            <Forms isUpdate={true} taskName={task.title} />
        </div>
    );
}
