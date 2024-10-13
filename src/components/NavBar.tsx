import {Link} from "react-router-dom";
import "./NavBar.css"

function NavBar(){
    return (
        <nav className="navbar">
            <ul>
                <li>
                    <Link to="/login">Login</Link>
                </li>
                <li>
                    <Link to="/register">Register</Link>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar;