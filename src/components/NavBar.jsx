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
    );
};

export default NavBar;