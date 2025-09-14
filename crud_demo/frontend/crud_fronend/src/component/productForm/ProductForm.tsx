import type React from "react";

export type ProductData = {
    title: string;
    description: string;
}

type ProductFormProps = {
    onSubmit: (data: ProductData) => void;
    children: React.ReactNode;
}


const ProductForm = ({onSubmit, children}: ProductFormProps) => {

    function handleSubmit(e: React.FormEvent<HTMLFormElement>){
        e.preventDefault();
        const formData = new FormData(e.currentTarget)
        const data = Object.fromEntries(formData) as ProductData;

        onSubmit(data)
        e.currentTarget.reset();

    }

    return (
        <>
        
        <form onSubmit={handleSubmit}>
            <label htmlFor="">Product name:</label>
            <input type="text" name="title" defaultValue=''/> <br /> <br />

            <label htmlFor="">Product details:</label>
            <textarea name = "description" /> <br /> <br />
            {/* <button type="submit">Submit</button> */}

            {children}
        </form>

{/*        
            {inputData && (
                <div>
                    <h3>Submitted Data:</h3>
                    <p>Title: {inputData.title}</p>
                    <p>Description: {inputData.description}</p>
                </div>
            )} */}

        
        </>
        
    )
}
export default ProductForm