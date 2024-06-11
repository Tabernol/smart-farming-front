import { Link } from "react-router-dom";
import "./Menu.css"; // Ensure this import statement is present

const Menu = () => {
    return (
        <nav className="menu">
            <div className="menu-links">
                <Link to="/">Home</Link>
                {/*<Link to="/main/about">About</Link>*/}
                {/*<Link to="/main/contacts">Contacts</Link>*/}
            </div>
            <div className="auth-links">
                <Link to="/sign-in">Sign In</Link>
                <Link to="/login">Login</Link>
            </div>
        </nav>
    );
};

export default Menu;
