// eslint-disable-next-line no-unused-vars
import React from 'react';
import PropTypes from 'prop-types'; // Importamos PropTypes
import { useCart } from '../context/CartContext'; // Usamos el hook useCart

const Item = ({ product }) => {
  const { addToCart } = useCart(); // Obtenemos la función addToCart del contexto

    const handleAddToCart = () => {
        addToCart(product); // Agregar el producto al carrito
    };

    return (
        <div>
            <h3>{product.name}</h3>
            <p>Precio: ${product.price}</p>
            <img src={product.image} alt={product.name} />
            <button onClick={handleAddToCart}>Agregar al carrito</button>
        </div>
    );
};

// Agregar validación de las props
Item.propTypes = {
    product: PropTypes.shape({
        name: PropTypes.string.isRequired, // name debe ser una cadena de texto y es obligatorio
        price: PropTypes.number.isRequired, // price debe ser un número y es obligatorio
        image: PropTypes.string.isRequired, // image debe ser una cadena de texto y es obligatorio
        id: PropTypes.string.isRequired, // id debe ser una cadena de texto y es obligatorio
     }).isRequired, // Aseguramos que la prop 'product' sea obligatoria y cumpla con la estructura anterior
};

export default Item;
