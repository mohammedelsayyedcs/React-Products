import React from "react";
import "./Footer.css";
import { NavLink } from "react-router-dom";

export default function Footer() {
    return (
        <div>
            <footer className="footer py-3 my-4">

                <ul className="navbar-nav align-items-center d-flex flex-row justify-content-center border-bottom pb-3 mb-3">

                    <li className="nav-item px-3">
                        <NavLink className="nav-link" to={"/"}>
                            Home
                        </NavLink>
                    </li>
                    <li className="nav-item px-3">
                        <NavLink className="nav-link" to={"/products"}>
                            Products
                        </NavLink>
                    </li>
                    <li className="nav-item px-3">
                        <NavLink className="nav-link" to={"/contact-us"}>
                            Contact Us
                        </NavLink>
                    </li>
                    <li className="nav-item px-3">
                        <NavLink className="nav-link" to={"/about-us"}>
                            About Us
                        </NavLink>
                    </li>
                </ul>
                <p className="text-center text-body-secondary">© 2025 Products Project, Inc</p>
            </footer>
        </div>
    );
}
