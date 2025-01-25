// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/navbar.css';
import CartWidget from './CartWidget';

const NavBar = () => {
    const [showLoginModal, setShowLoginModal] = useState(false);
    const [showRegisterModal, setShowRegisterModal] = useState(false);

    const toggleLoginModal = () => setShowLoginModal(!showLoginModal);
    const toggleRegisterModal = () => setShowRegisterModal(!showRegisterModal);

    return (
        <>
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
                        <div className="nav-buttons ms-auto">
                            <button onClick={toggleLoginModal} className="btn btn-outline-primary me-2">
                                Iniciar Sesión
                            </button>
                            <button onClick={toggleRegisterModal} className="btn btn-outline-secondary">
                                Registrarse
                            </button>
                        </div>
                    </div>
                    <div className="ms-3">
                        <CartWidget />
                    </div>
                </div>
            </nav>

            {/* Modal de Iniciar Sesión */}
            <div className={`modal ${showLoginModal ? 'show' : ''}`} onClick={toggleLoginModal}>
                <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                    <h2>Iniciar Sesión</h2>
                    <form>
                        <div className="form-group">
                            <label>Email:</label>
                            <input
                                type="email"
                                placeholder="Ingresa tu email"
                                required
                                autoComplete="email"
                            />
                        </div>
                        <div className="form-group">
                            <label>Contraseña:</label>
                            <input
                                type="password"
                                placeholder="Ingresa tu contraseña"
                                required
                                autoComplete="current-password"
                            />
                        </div>
                        <button type="submit" className="btn btn-primary">
                            Iniciar Sesión
                        </button>
                        <button onClick={toggleLoginModal} className="btn btn-secondary mt-2">
                            Cerrar
                        </button>
                    </form>
                </div>
            </div>

            {/* Modal de Registrarse */}
            <div className={`modal ${showRegisterModal ? 'show' : ''}`} onClick={toggleRegisterModal}>
                <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                    <h2>Registrarse</h2>
                    <form>
                        <div className="form-group">
                            <label>Nombre:</label>
                            <input type="text" placeholder="Ingresa tu nombre" required />
                        </div>
                        <div className="form-group">
                            <label>Email:</label>
                            <input type="email" placeholder="Ingresa tu email" required autoComplete="email" />
                        </div>
                        <div className="form-group">
                            <label>Contraseña:</label>
                            <input
                                type="password"
                                placeholder="Crea una contraseña"
                                required
                                autoComplete="new-password"
                            />
                        </div>
                        <button type="submit" className="btn btn-primary">
                            Registrarse
                        </button>
                        <button onClick={toggleRegisterModal} className="btn btn-secondary mt-2">
                            Cerrar
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default NavBar;