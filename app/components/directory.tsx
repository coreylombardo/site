import { Fragment } from "react";
import { useLocation, Link } from "react-router";

export default function Directory() {
    const { pathname } = useLocation();
    const segments = pathname.split("/").filter(Boolean);

    return (
        <span className="directory">
            <Link to="/">lombardo.lol</Link>
            {segments.length === 0 && " → /"}
            {segments.map((segment, i) => {
                const to = "/" + segments.slice(0, i + 1).join("/");
                const isLast = i === segments.length - 1;

                return (
                    // isLast: the last link in the breadcrumb (current page) wont be clickable
                    <Fragment key={to}>
                        {" → "}
                        {isLast ? (
                            <span>/{segment}</span>
                        ) : (
                            <Link to={to}>/{segment}</Link>
                        )}
                    </Fragment>
                );
            })}
        </span>
    );
}