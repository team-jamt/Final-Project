import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../styles/NavTabs.css";
import fire from "../config/Fire";

class NavTabs extends Component {
    constructor(props) {
        super(props);
        this.logout = this.logout.bind(this);
    }

    logout() {
        fire.auth().signOut();
    }

    render() {
        return (
            <ul className="nav nav-tabs">
                <li className="nav-item" id="home">
                    <Link to="/home" className={window.location.pathname === "/home" ? "nav-link active" : "nav-link"}>
                        Home
                </Link>
                </li>
                <li className="nav-item">
                    <Link to="/post" className={window.location.pathname === "/post" ? "nav-link active" : "nav-link"}>
                        Post an Item
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
                    <Link to="/request" className={window.location.pathname === "/request" ? "nav-link active" : "nav-link"}>
                        Item Requests
                </Link>
                </li>
                <button onClick={this.logout} className=" logout-btn">Log Out</button>
            </ul>







        )
    }
}

export default NavTabs;