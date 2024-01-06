import { Profile } from "./Profile";
import { Link } from "react-router-dom";
import "../styles/Gallery.css";

export function Gallery() {
  return (
    <>
      <section>
        <h1>Amazing Scientists</h1>
        <Profile></Profile>
        <Profile></Profile>
        <Profile></Profile>
      </section>
      <nav>
        <Link to="/" className="home-button">
          Home
        </Link>
      </nav>
    </>
  );
}
