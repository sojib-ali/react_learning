import "../styles/home.css";
import { Link } from "react-router-dom";
export function N_home() {
  return (
    <div>
      <h3 className="text-red-800 text-2xl">Chapter - 6 revision</h3>
      <Link to="header" className="links">
        Header Page
      </Link>
    </div>
  );
}
