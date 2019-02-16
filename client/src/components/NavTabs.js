import React from "react";
import { Link } from "react-router-dom";

function NavTabs() {
    return (
        <ul className="nav nav-tabs">
            <li className="nav-item">
                <Link to="/" className={window.location.pathname === "/" ? "nav-link active" : "nav-link"}>
                    Home
                </Link>
            </li>
            <li className="nav-item">
                <Link to="/rent" className={window.location.pathname === "/rent" ? "nav-link active" : "nav-link"}>
                    Rent an Item
                </Link>
            </li>
            <li className="nav-item">
                <Link to="/buy" className={window.location.pathname === "/buy" ? "nav-link active" : "nav-link"}>
                    Buy an Item
                </Link>
            </li>
            <li className="nav-item">
                <Link to="/post" className={window.location.pathname === "/post" ? "nav-link active" : "nav-link"}>
                    Post an Item
                </Link>
            </li>
            <li className="nav-item">
                <Link to="/request" className={window.location.pathname === "/request" ? "nav-link active" : "nav-link"}>
                    Request an Item
                </Link>
            </li>
        </ul>
    )
}

export default NavTabs;