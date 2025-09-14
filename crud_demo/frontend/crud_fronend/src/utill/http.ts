export async function createNewProduct(){
    const response = await fetch(`http://localhost:8000/products`,{
        method: 'POST',
        body: JSON.stringify(eventData),
        headers:{
            'Content-Type': 'application/json',
        },
    });

    if(!response.ok){
        const error = new Error('An error occured while adding the new product');
        error.code = response.status;
        error.info = await response.json();
        throw error;
    }

    const {data} = await response.json();

    return data
}