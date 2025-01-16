import { Link } from "react-router-dom";
import "../styles/home.css";
export function Home() {
  return (
    <>
    {/* <div className="lessons">
      <h3>Extracting State Logic into a Reducer</h3>
      <Link to="/task-app" className="nav-link">
        Task App
      </Link>
      <Link to="/messenger-with-reducer" className="nav-link">
        Challenge-1: Dispatch actions from event handlers
      </Link>
      <Link to="/context-image-list" className="nav-link">
        Replace prop drilling with context
      </Link>
      
    </div> */}
    <div>
      <h3>Adding interactivity - lesson(2)</h3>
      <Link to="/next-gallery" className="nav-link">Next Gallery app</Link>
      <Link to="/input-form" className="nav-link">Input form</Link>
      <Link to="/textarea-msg" className="nav-link">Textarea alert message</Link>
      <Link to="/alert-input" className="nav-link">Alert input</Link>
    </div>
    </>
  );
}
