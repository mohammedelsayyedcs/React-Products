import React from "react";
import "./Footer.css";
import { NavLink } from "react-router-dom";

export default function Footer() {
    return (
        <div>
            <footer class="py-3 my-4">

                <ul class="navbar-nav align-items-center d-flex flex-row justify-content-center border-bottom pb-3 mb-3">

                    <li class="nav-item px-3">
                        <NavLink class="nav-link" to={"/"}>
                            Home
                        </NavLink>
                    </li>
                    <li class="nav-item px-3">
                        <NavLink class="nav-link" to={"/products"}>
                            Products
                        </NavLink>
                    </li>
                    <li class="nav-item px-3">
                        <NavLink class="nav-link" to={"/contact-us"}>
                            Contact Us
                        </NavLink>
                    </li>
                </ul>
                <p class="text-center text-body-secondary">© 2025 Products Project, Inc</p>
            </footer>
        </div>
    );
}
