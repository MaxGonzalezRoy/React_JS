// eslint-disable-next-line no-unused-vars
import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/navbar.css'; // Asegúrate de que esta ruta sea correcta

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <NavLink className="navbar-brand" to="/">
                    Tienda React
                </NavLink>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                        <li className="nav-item">
                <NavLink
                    to="/"
                    className={({ isActive }) =>
                    isActive ? 'nav-link active' : 'nav-link'
                    }
                >
                    Home
                </NavLink>
                    </li>
                    <li className="nav-item">
                <NavLink
                    to="/about"
                    className={({ isActive }) =>
                    isActive ? 'nav-link active' : 'nav-link'
                    }
                >
                About
                </NavLink>
                    </li>
                    <li className="nav-item">
                <NavLink
                    to="/cart"
                    className={({ isActive }) =>
                        isActive ? 'nav-link active' : 'nav-link'
                    }
                >
                    Cart
                </NavLink>
                    </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
