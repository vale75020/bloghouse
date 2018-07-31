import React from "react";
import { Link } from "react-router-dom"


const Nav = () => {
    return (
        <div>
            <nav className="navbar navbar-dark bg-primary">
                <ul className="nav">
                    <li className="nav-item">
                        <Link className="nav-link active" to="/">Sign-up</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/login">Login</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/articles">Articles</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/add">Add an Article</Link>
                    </li>

                </ul>
            </nav>

        </div>
    )
}

export default Nav;