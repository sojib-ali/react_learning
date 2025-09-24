import { useMutation, useQueryClient } from "@tanstack/react-query";
import { redirect, useRouter } from "next/navigation";
import { createNewTask } from "../http";

export default function useCreateTask(){
    const queryClient = useQueryClient();
    const router = useRouter();

    const queryCreate = useMutation({
        mutationFn: createNewTask,
        onSuccess: ()=>{
            queryClient.invalidateQueries({queryKey: ['tasks']})
            router.push('/tasks')
        }
    })

    return queryCreate;
}