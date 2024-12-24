<<<<<<< HEAD
import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavBar = () => {
    const categories = [
        { name: 'Electrónica', path: '/category/electronics' },
        { name: 'Libros', path: '/category/books' },
    ];

    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container>
                <Navbar.Brand>
                    <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>
                        Mi Tienda
                    </Link>
                </Navbar.Brand>
                <Nav className="ml-auto">
                    {categories.map((category) => (
                        <Nav.Link key={category.path} as={Link} to={category.path} style={{ color: 'white' }}>
                            {category.name}
                        </Nav.Link>
                    ))}
                </Nav>
            </Container>
        </Navbar>
=======
import CartWidget from './CartWidget';

const NavBar = () => {
    return (
        <nav style={{ width: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', border: '10px', paddingLeft: '50px', paddingRight: '30px', background: '#D1FDDD', color: '#443856'}}>
        <h1>Hiper Tiendita</h1>
        <ul style={{ display: 'flex', listStyle: 'none', gap: '55px', color: '#443856' }}>
            <li ><a href="#home" >Inicio</a></li>
            <li><a href="#products">Productos</a></li>
            <li><a href="#about">Acerda de</a></li>
        </ul>
        <CartWidget/>
        </nav>
>>>>>>> ac5c52b9098e684847bad0287260148a949ee02f
    );
};

export default NavBar;