import { Link, Outlet } from "react-router"

const Products = () => {
    return (
        <>
        <div>
             <Link to="/products/new-product">
                <button>Add new product</button>
            </Link>
            <br />
            <br />
             <Link to="/products/edit-product">
                <button>Edit product</button>
            </Link>
        </div>
        <hr />
        <Outlet />
        </>
    )
}

export default Products
