import { Link } from "react-router-dom";
import "../styles/home.css";
export function Home() {
  return (
    <>
      <div className="lessons">
        <h3 className="text-red-800 text-2xl">Chapter-4 </h3>
        {/* <Link to="/react-typescript-component" className="links">
          Adding a props type
        </Link> */}
        <Link to="/button-with-useEffect" className="links">
          button with useEffect
        </Link>
        <Link to="/fetching-data-useEffect" className="links">
          Data fetching with useEffect
        </Link>
        <Link to="/fetching-data-useState" className="links">
          Data fetching with useState
        </Link>
        <Link to="/fetching-data-useReducer" className="links">
          Data fetching with useReducer
        </Link>
        <Link to="/fetching-data-useRef" className="links">
          Data fetching with useRef
        </Link>
        <Link to="/fetching-data-useMemo" className="links">
          Data fetching with useMemo
        </Link>
        <Link to="/Callback-hook" className="links">
          Use of callback hook
        </Link>

        <h3>Chapter-5</h3>
        <Link to="/alert-plain-css" className="links">
          Using plain CSS in the alert component
        </Link>
      </div>
    </>
  );
}
