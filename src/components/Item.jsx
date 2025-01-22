import React from 'react';
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

export default Item;
