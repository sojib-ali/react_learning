'use client';

import { SubmitHandler, useForm } from 'react-hook-form';
import styles from './form.module.css';
import useCreateTask from '@/util/hooks/useCreate-task';

interface FormsProps {
    isUpdate?: boolean;
    taskName?: string;
}

type Inputs = {
    title: string;
}


export default function Forms({ isUpdate = false, taskName }: FormsProps) {

    const {register, handleSubmit, reset} = useForm<Inputs>();
    const {mutate, isPending, isError, error}= useCreateTask();

    const onSubmit: SubmitHandler<Inputs> = (data) => {
        mutate(data,{
            onSuccess: () => {
                reset();
            }
        })
    }

    const button = isUpdate ? (
        <button className={styles.taskAddButton}>Update Task</button>
    ):(
         <button
            type='submit'
            disabled = {isPending}
            className={styles.taskAddButton}
          >
            {isPending ? "Adding...": "Add Task"}
        </button>
    )
    
    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
                <div className={styles.formGroup}>
                    <label htmlFor="taskName">Task name</label>
                    <input
                        {...register("title", {required: true} )}
                        type="text"
                        id="taskName"
                        className={styles.input}
                        placeholder="e.g., Buy groceries"
                        defaultValue={taskName}
                    />
                </div>
                 <div className={styles.buttonGroup}>
                    {button}
                </div> 
                {isError && <p>{error.message}</p>}
            </form>
        </>
    )
}