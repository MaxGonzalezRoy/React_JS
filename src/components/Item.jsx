// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useCart } from '../context/CartContext';
import '../styles/item.css'

const Item = ({ product }) => {
  const { addToCart, removeFromCart, cart } = useCart();
  const [added, setAdded] = useState(false);
  const [removed, setRemoved] = useState(false);
  const [quantity, setQuantity] = useState(1);

  const getRemainingStock = () => {
    const itemInCart = cart.find(item => item.id === product.id);
    const cartQuantity = itemInCart ? itemInCart.quantity : 0;
    return product.stock - cartQuantity;
  };

  const handleAddToCart = () => {
    const remainingStock = getRemainingStock();
    if (quantity <= remainingStock) {
      addToCart({ ...product, quantity });
      setAdded(true);
      setRemoved(false);
      setTimeout(() => {
        setAdded(false);
      }, 1500);
    } else {
      alert('No hay suficiente stock disponible');
    }
  };

  const handleRemoveFromCart = () => {
    removeFromCart(product.id);
    setRemoved(true);
    setAdded(false);
    setTimeout(() => {
      setRemoved(false);
    }, 1500);
  };

  const isInCart = cart && cart.some(item => item.id === product.id);

  const handleQuantityChange = (event) => {
    const value = parseInt(event.target.value, 10);
    const remainingStock = getRemainingStock();
    if (value >= 1 && value <= remainingStock) {
      setQuantity(value);
    } else if (value > remainingStock) {
      setQuantity(remainingStock);
    } else {
      setQuantity(1);
    }
  };

  return (
    <div className="item-card">
      <h3>{product.name}</h3>
      <p>Precio: ${product.price}</p>
      <img src={product.image} alt={product.name} />

      <p>Stock disponible: {getRemainingStock()}</p>
      
      <div className="quantity-selector">
        <button onClick={() => quantity > 1 && setQuantity(quantity - 1)}>-</button>
        <input
          type="number"
          value={quantity}
          min="1"
          max={getRemainingStock()}
          onChange={handleQuantityChange}
        />
        <button onClick={() => quantity < getRemainingStock() && setQuantity(quantity + 1)}>+</button>
      </div>
      
      <button 
        onClick={isInCart ? handleRemoveFromCart : handleAddToCart} 
        className={isInCart ? "in-cart" : "add-to-cart"}
      >
        {isInCart ? "Eliminar del carrito" : "Agregar al carrito"}
      </button>

      {added && !removed && <p>Producto agregado al carrito!</p>}
      {removed && !added && <p>Producto eliminado del carrito!</p>}
    </div>
  );
};

Item.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    stock: PropTypes.number.isRequired,
  }).isRequired,
};

export default Item;