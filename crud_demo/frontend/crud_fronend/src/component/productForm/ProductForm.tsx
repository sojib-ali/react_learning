import React, { useState } from "react";

type ProductData = {
    title: string;
    description: string;
}

const ProductForm = () => {
    const[inputData, setInputData] = useState <ProductData | null> (null);

    function handleSubmit(e: React.FormEvent<HTMLFormElement>){
        e.preventDefault();
        const formData = new FormData(e.currentTarget)
        const data = Object.fromEntries(formData) as ProductData;
        setInputData(data);
        e.currentTarget.reset();
    }

    return (
        <>
        
        <form onSubmit={handleSubmit}>
            <label htmlFor="">Product name:</label>
            <input type="text" name="title" defaultValue=''/> <br /> <br />

            <label htmlFor="">Product details:</label>
            <textarea name = "description" /> <br /> <br />
            <button type="submit">Submit</button>
        </form>

       
            {inputData && (
                <div>
                    <h3>Submitted Data:</h3>
                    <p>Title: {inputData.title}</p>
                    <p>Description: {inputData.description}</p>
                </div>
            )}

        
        </>
        
    )
}
export default ProductForm