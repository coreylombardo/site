import { Link } from "react-router";
import { Icon } from "@iconify/react";
import "../app.css";

const Navbar = () => {
    return (
        <div className="sidenav">
            <ul>
                <li>
                    <Link to="/">
                        <Icon icon="mdi:home-outline" className="navbar-icon" />
                        home
                    </Link>
                </li>
                <li>
                    <Link to="/projects">
                        <Icon icon="mdi:file-document-outline" className="navbar-icon" />
                        projects
                    </Link>
                </li>
                <li>
                    <Link to="/blog">
                        <Icon icon="mdi:thought-bubble-outline" className="navbar-icon" />
                        blog
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default Navbar;