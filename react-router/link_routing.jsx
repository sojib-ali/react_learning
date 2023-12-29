import './App.css';
import {Link} from "react-router-dom";

function Home(){
  return(
    <div>
      <nav>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>
      <h1>Hi Josephine!</h1>
    </div>
  );
}
export function About(){
  return(
    <div>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
      <h1>About us</h1>
    </div>
  );
}
export function Contact(){
  return(
    <div>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
      <h1>Contact Us</h1>
    </div>
  );
}

export function App() {
  return <Home />
}
