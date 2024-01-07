// import { Gallery } from "../components/Gallery";
import { Link } from "react-router-dom";
import "../styles/Home.css";

export function Home() {
  return (
    <div>
      <nav style={{ display: "block" }}>
        <h1>Describing the UI</h1>
        <h3>Passing Props to a components</h3>
        <Link to="/gallery" className="nav-link">
          Gallery
        </Link>
        <Link to="/JSX with curly braces" className="nav-link">
          JavaScript in JSX with curly braces
        </Link>
        <Link to="/passing props" className="nav-link">
          Pasing Props
        </Link>
        <Link to="/read props" className="nav-link">
          Read Props inside the child components
        </Link>
        <h2>Challenges</h2>
        <Link to="/challenge 1" className="nav-link">Challenge 1 of 3:Extract a component  </Link>
      </nav>

      <nav style={{ display: "block" }}>
        <h1>Describing the UI</h1>
        <h3>Passing Props to a components</h3>
      </nav>
    </div>
  );
}
