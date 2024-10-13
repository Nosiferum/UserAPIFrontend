import {Link} from "react-router-dom";
import "./NavBar.css"

function NavBar(){
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div className="navbar-links">
                    <Link to="/login">Login</Link>
                    <Link to="/register">Register</Link>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;