import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteTask } from "../http";


export default function useDeleteTask(){
    const queryClient = useQueryClient();
    

    const queryDelete = useMutation({
        mutationFn: deleteTask,
        onSuccess:()=>{
            queryClient.invalidateQueries({
                queryKey:['tasks'],
                // refetchType: 'none',
            });

        }
    })

    return queryDelete;;
}