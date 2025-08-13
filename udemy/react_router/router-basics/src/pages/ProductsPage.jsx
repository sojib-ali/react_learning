import { Link } from "react-router-dom";

const ProductsPage = () => {
  const PRODUCTS = [
    { id: 1, item: "product 1" },
    { id: 2, item: "product 2" },
    { id: 3, item: "product 3" },
  ];

  return (
    <>
      <h2>Products Page</h2>
      <ul>
        {PRODUCTS.map((prod) => (
          <li key={prod.id}>
            <Link to={`/products/${prod.id}`}> {prod.item} </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ProductsPage;
