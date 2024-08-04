// import { products } from "../components/chapter-6/data/products";
import { pro_list } from "../n_components/stats/pro_list";
import { Link, useSearchParams } from "react-router-dom";

export function ProListPage() {
  const [searchParams] = useSearchParams();
  function getFilteredProducts() {
    const search = searchParams.get("search");
    if (search == null || search == "") {
      return pro_list;
    } else {
      return pro_list.filter(
        (prod) =>
          prod.name.toLowerCase().indexOf(search.toLocaleLowerCase()) > -1
      );
    }
  }
  return (
    <div className="text-center p-5">
      <h2 className="text-xl font-bold text-slate-600">
        Here are some great tools for react
      </h2>
      <ul className="list-none m-0 p-0">
        {getFilteredProducts().map((prod) => (
          <li key={prod.id}>
            <Link
              to={`${prod.id}`}
              className="p-1 text-base text-slate-800
            hover:underline"
            >
              {prod.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
