// import { Gallery } from "../components/Gallery";
import {Link} from "react-router-dom";
import '../styles/Home.css';

export function Home(){
    return(
        <div>
            <nav style={{display:"block"}}>
                <Link to="/gallery" className="nav-link" >Gallery</Link>
                <Link to="/JSX with curly braces" className="nav-link">JavaScript in JSX with curly braces</Link>
                <Link to="/passing props" className="nav-link">Pasing Props</Link>

            </nav>
        </div>
    );
}