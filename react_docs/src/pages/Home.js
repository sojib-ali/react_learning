// import { Gallery } from "../components/Gallery";
import { Link } from "react-router-dom";
import "../styles/Home.css";
import "../styles/Stories.css";


export function Home() {
  return (
    <div>
      <nav>
        <h1>Describing the UI</h1>
        {/* <h3>Passing Props to a components</h3> */}
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
        <Link to="/rendering list" className="nav-link">
          Rendering list
        </Link>
        <Link to="/Get Inspired App" className="nav-link">
          Your UI as a Tree - Get Inspired App
        </Link>
        </nav>

      <nav>
        <h1>Adding Interactivity</h1>
        <Link to="/Responding to events" className="nav-link">
        Responding to events
        </Link>
        <Link to="/Event propagation" className="nav-link">
        Event Propagation
        </Link>
      </nav>


      <nav>
        <h1>Challenges</h1>
        <Link to="/challenge 1" className="nav-link">
          Challenge 1 of 3:Extract a component{" "}
        </Link>
        <Link to="/logical AND" className="nav-link">
          Conditional rendering
        </Link>
        <Link to="/rendering list_2" className="nav-link">
          Rendering list_2
        </Link>
        <Link to="/story tray" className="nav-link">
          Keeping Components Pure
        </Link>
      </nav>
    </div>
  );
}
