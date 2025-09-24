let url = "http://127.0.0.1:8000/tasks";

interface Task{
    title: string;
}
interface UpdateTaskArgs{
    id: string | number;
    task: {title: string};
}

export async function fetchTasks(){
    

    const response = await fetch(url);
    if(!response.ok){
        const error = new Error('An error occurred while fetching tasks');
        throw error;
    }
    const data = await response.json();
    return data;
}


export async function createNewTask(task: Task){
    const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify(task),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if(!response.ok){
        const error = new Error('An error occurred while adding new tasks');
        throw error;
    }

    const data = await response.json();
    return data;
}

export async function fetchTask({id, signal}: {id: number | string; signal?: AbortSignal}){
    const response = await fetch(`${url}/${id}`, {signal});

    if(!response.ok){
        const error = new Error('An error occurred while fetching a single task')
        throw error;
    }

    const data = await response.json();
    return data;
}

export async function updateTask({id, task}: UpdateTaskArgs){
    const response = await fetch(`${url}/${id}`,{
        method: 'PATCH',
        body: JSON.stringify(task),
        headers:{
            'Content-Type': 'application/json',
        },
    });

    if(!response.ok){
        const error = new Error('An error occurred while updaing task')
        throw error;
    }

    return response.json();
    
}

export async function deleteTask(id:string | number){
    const response = await fetch(`${url}/${id}`,{
        method: 'DELETE',
    });

    if(!response.ok){
        const error = new Error('An error occurred while updaing task')
        throw error;
    }

    if(response.status === 204){
        return null;
    }
     return await response.json();
  

    
}
