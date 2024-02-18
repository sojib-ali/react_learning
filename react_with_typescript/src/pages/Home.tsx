import { Link } from "react-router-dom";
import "../styles/home.css";
export function Home() {
  document.title = "Home";
  return (
    <>
      <Link to="/react-typescript-component">Adding a props type</Link>
      <Link to="/button-with-useEffect">Use effect</Link>
    </>
  );
}
