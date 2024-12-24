import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Card } from 'react-bootstrap';

const Item = ({ item }) => {
    // Validar si `item` y sus propiedades existen
    if (!item || !item.image || !item.name || !item.price) {
        return (
            <Col lg={4}>
                <Card>
                    <Card.Body>
                        <Card.Text>Información del producto no disponible.</Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        );
    }

    return (
        <Col lg={4}>
            <Card>
                <Card.Img variant="top" src={item.image} alt={item.name} />
                <Card.Body>
                    <Card.Title>{item.name}</Card.Title>
                    <Card.Text>Precio: ${item.price}</Card.Text>
                    <Link to={`/product/${item.id}`} className="btn btn-primary">
                        Ver Detalle
                    </Link>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Item;