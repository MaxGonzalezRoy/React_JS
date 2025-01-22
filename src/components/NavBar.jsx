// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/navbar.css'

function Navbar() {
    return (
        <nav className="navbar">
            <ul className="navbar-list">
                <li className="navbar-item">
                    <Link to="/" className="navbar-link">Inicio</Link>
                </li>
                <li className="navbar-item">
                    <Link to="/cart" className="navbar-link">Carrito</Link>
                </li>
                <li className="navbar-item">
                    <Link to="/about" className="navbar-link">Acerca de</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
