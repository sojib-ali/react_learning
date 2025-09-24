let url = "http://127.0.0.1:8000/tasks";

export interface Task{
    title: string;
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
    }

    const data = await response.json();
    return data;
    
}
