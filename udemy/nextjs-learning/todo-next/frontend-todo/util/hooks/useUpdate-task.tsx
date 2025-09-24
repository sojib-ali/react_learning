import { useMutation, useQueryClient } from "@tanstack/react-query"
import { updateTask } from "../http"
import { useParams } from "next/navigation";
// import { useRouter } from "next/router";
import { useRouter } from "next/navigation";

export default function useUpdateTask(){
    const router = useRouter();
    const params = useParams()
   const {taskId} = params;
    const queryClient = useQueryClient();

    const queryUpdate = useMutation({

        mutationFn: updateTask,
        onMutate: async(newTask) =>{
            await queryClient.cancelQueries({queryKey:['tasks', taskId]});
            const previousTask = queryClient.getQueryData(['tasks', taskId]);

            queryClient.setQueryData(['tasks', taskId], newTask);

            return {previousTask}
        },
        onError:(error, newTask, context) =>{
            queryClient.setQueryData(['tasks', taskId], context?.previousTask)
        },
        onSettled:() => {
            queryClient.invalidateQueries({queryKey:['tasks', taskId]})
            router.push('/tasks')
            
        }
        

        

        
    });

    return queryUpdate;
    
}