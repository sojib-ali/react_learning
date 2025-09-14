
import { useMutation } from "@tanstack/react-query"
import ProductForm, { type ProductData } from "../productForm/ProductForm"
import { createNewProduct } from "../../utill/http"

const NewProducts = () => {

  useMutation({
    mutationFn: createNewProduct,
    onSuccess: () => {
      
    }
  })

  function handleSubmit(data: ProductData){
    //will add mutate later (react-query)
  }

    return (
        <div>
          <ProductForm onSubmit={handleSubmit}>
              <button>cancel</button>
              <button>Add</button>
          </ProductForm>
      </div>
    )
}

export default NewProducts