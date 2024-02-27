import { products } from "../data/products";
import { Link } from "react-router-dom";

export default function Products_page() {
  return (
    <div className="text-center p-5">
      <h2 className="text-xl font-bold text-slate-600">
        Here are some great tools for react
      </h2>
      <ul className="list-none m-0 p-0">
        {products.map((product) => (
          <li key={product.id}>
            {" "}
            <Link
              to={`${product.id}`}
              className="p-1 text-base text-slate-800 hover: underline"
            >
              {product.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
