// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import PropTypes from 'prop-types'; // Importamos PropTypes
import { useCart } from '../context/CartContext'; // Usamos el hook useCart

const Item = ({ product }) => {
  const { addToCart, removeFromCart } = useCart(); // Obtenemos las funciones addToCart y removeFromCart del contexto
  const [added, setAdded] = useState(false); // Estado para saber si el producto fue agregado al carrito
  const [removed, setRemoved] = useState(false); // Estado para saber si el producto fue eliminado del carrito

  const handleAddToCart = () => {
    addToCart(product); // Agregar el producto al carrito
    setAdded(true); // Marca que el producto fue agregado
    setRemoved(false); // Aseguramos que el estado de eliminado se restablezca
    setTimeout(() => {
      setAdded(false); // Restablecer el estado de agregado
    }, 1500);
  };

  const handleRemoveFromCart = () => {
    removeFromCart(product.id); // Eliminar el producto del carrito
    setRemoved(true); // Marca que el producto fue eliminado
    setAdded(false); // Aseguramos que el estado de agregado se restablezca
    setTimeout(() => {
      setRemoved(false); // Restablecer el estado de eliminado
    }, 1500);
  };

  return (
    <div className="item-card">
      <h3>{product.name}</h3>
      <p>Precio: ${product.price}</p>
      <img src={product.image} alt={product.name} />
      
      {/* Botón para agregar al carrito */}
      <button 
        onClick={handleAddToCart} 
        className={added ? "added" : ""}
      >
        {added ? "Producto agregado!" : "Agregar al carrito"}
      </button>
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
