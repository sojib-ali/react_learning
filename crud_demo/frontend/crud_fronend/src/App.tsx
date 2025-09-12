import { createBrowserRouter, RouterProvider } from "react-router"
import Homepage from "./component/Hompage"
import NewProducts from "./component/newProduct/NewProducts"
import Products from "./component/products/Products"
import EditProduct from "./component/editProduct/EditProduct"


const router = createBrowserRouter([
  {
    path: '/',
    element: <Homepage />,
  },
  {
    path:'/products',
    element: <Products />,

    children: [
      {
        path: '/products/new-product',
        element: <NewProducts />
      },
      {
        path: '/products/edit-product',
        element: <EditProduct />
      },
    ]
  }
  

])

function App() {
  return (
  <>
    <RouterProvider router={router}/>
  </>
  )
}



export default App
