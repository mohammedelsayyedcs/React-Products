import React from "react";
import "./Footer.css";

export default function Footer() {
    return (
        <div>
            <footer class="py-3 my-4">

                <ul class="nav justify-content-center border-bottom pb-3 mb-3">

                    <li class="nav-item">
                        <a href="#" class="nav-link px-2 text-body-secondary px-3">
                            Home
                        </a>
                    </li>
                    <li class="nav-item">
                        <a href="#" class="nav-link px-2 text-body-secondary px-3">
                            Products
                        </a>
                    </li>
                    <li class="nav-item">
                        <a href="#" class="nav-link px-2 text-body-secondary px-3">
                            Contact Us
                        </a>
                    </li>
                </ul>
                <p class="text-center text-body-secondary">© 2025 Products Project, Inc</p>
            </footer>
        </div>
    );
}
