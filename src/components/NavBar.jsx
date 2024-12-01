import React from "react";
import CartWidget from './CartWidget';

const NavBar = () => {
    return (
        <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 30px', background: '#eaeaea'}}>
        <h1>Hiper Tiendita</h1>
        <ul style={{ display: 'flex', listStyle: 'none', gap: '15px' }}>
            <li><a href="#home">Inicio</a></li>
            <li><a href="#products">Productos</a></li>
            <li><a href="#about">Acerda de</a></li>
        </ul>
        <CartWidget/>
        </nav>
    )
}

export default NavBar;