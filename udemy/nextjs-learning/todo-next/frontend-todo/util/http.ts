
export async function fetchTasks(){
    let url = "http://127.0.0.1:8000/tasks";

    const response = await fetch(url);
    if(!response.ok){
        const error = new Error('An error occurred while fetching tasks');
        // error.code = response.status;
        // error.info = await response.json();
        throw error;
    }

    const data = await response.json();
    return data;
}
