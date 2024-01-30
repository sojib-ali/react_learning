import { Link } from "react-router-dom";

export default function Nav(){
    return(
        <div style={{marginBottom:"10px"}}>
            <Link to='/'>
                Home
            </Link>
        </div>
    )
}