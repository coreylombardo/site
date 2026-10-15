// this is gonna show some shit like coreylombardo -> Home
import { useLocation, Link } from "react-router";

export default function Directory() {
    const location = useLocation();

    if (location.pathname === "/") {
        return (
            <span className="directory">
                <Link to="/">lombardo.lol</Link> → /
            </span>
        );
    } else {
        return (
            <span className="directory">
                <Link to="/">lombardo.lol</Link> → <Link to={location.pathname}>{location.pathname}</Link>
            </span>
        );
    }
}

// need to track "degree" of route so that it can make clickable links for degree - 1 