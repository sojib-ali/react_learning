import "../styles/home.css";
import { Link } from "react-router-dom";
export function N_home() {
  return (
    <div>
      <h3 className="text-red-800 text-2xl">Chapter - 6 revision,7</h3>
      <Link to="header" className="links">
        Header Page
      </Link>
      <h3 className="text-red-800 text-2xl">Chapter - 8 </h3>
      <Link to="prop-drilling" className="links">
        Prop Drilling
      </Link>
      <Link to="react-context" className="links">
        React Context
      </Link>
    </div>
  );
}
