import { pro_list } from "../n_components/stats/pro_list";
import { Link } from "react-router-dom";

export function ProListPage() {
  return (
    <div className="text-center p-5">
      <h2 className="text-xl font-bold text-slate-600">
        Here are some great tools for react
      </h2>
      <ul className="list-none m-0 p-0">
        {pro_list.map((prod) => (
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
