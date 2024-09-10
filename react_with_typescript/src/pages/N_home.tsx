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
      <Link to="react-redux" className="links">
        React redux
      </Link>
      <Link to="alert-button" className="links">
        sarwar
      </Link>
      <h4 className="text-red-800 text-2xl">Chapter -9</h4>
      <Link to="blog-posts" className="links">
        Blogs fetch with useEffect
      </Link>
    </div>
  );
}
