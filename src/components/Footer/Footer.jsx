import React from "react";
import "./Footer.css";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Footer() {
    const { t } = useTranslation()
    return (
        <div>
            <footer className="footer py-3 my-4">

                <ul className="navbar-nav align-items-center d-flex flex-row justify-content-center border-bottom pb-3 mb-3">

                    <li className="nav-item px-3">
                        <NavLink className="nav-link" to={"/"}>
                            {t("home")}
                        </NavLink>
                    </li>
                    <li className="nav-item px-3">
                        <NavLink className="nav-link" to={"/products"}>
                            {t("products")}
                        </NavLink>
                    </li>
                    <li className="nav-item px-3">
                        <NavLink className="nav-link" to={"/add-product"}>
                            {t("add_product")}
                        </NavLink>
                    </li>
                    <li className="nav-item px-3">
                        <NavLink className="nav-link" to={"/contact-us"}>
                            {t("contact")}
                        </NavLink>
                    </li>
                    <li className="nav-item px-3">
                        <NavLink className="nav-link" to={"/about-us"}>
                            {t("about")}
                        </NavLink>
                    </li>
                </ul>
                <p className="text-center text-body-secondary">© 2025 {t("products_project")}, Inc</p>
            </footer>
        </div>
    );
}
