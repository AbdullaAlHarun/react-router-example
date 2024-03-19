import { Link, NavLink } from "react-router-dom";
import './Nav.css'
const Nav = () => {
    return (
        <div>
            <nav className="nav-link">
                <span>My Website</span>
                <Link to="/">Home</Link>
                <NavLink to="/users">Users</NavLink>
                <NavLink to="/posts">Posts</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/contact">Contact</NavLink>
            </nav>
        </div>
    );
};

export default Nav;