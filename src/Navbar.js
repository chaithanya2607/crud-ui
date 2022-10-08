import React from "react";
import { Link } from "react-router-dom";


export default function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-secondary">
                <div className="container">
                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link fw-bold text-light fs-5" aria-current="page" to="/">HOME</Link>
                            </li>
                        </ul>

                    </div>
                    <Link className="btn btn-outline-light" to="/create-user">ADD USER</Link>
                </div>
            </nav>
        </div>
    )
}