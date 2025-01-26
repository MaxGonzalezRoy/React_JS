// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import { useCart } from '../context/CartContext';
import CheckoutForm from './CheckoutForm';
import '../styles/cart.css';

const Cart = () => {
  const { cart, getTotal, removeFromCart, clearCart } = useCart();
  const [loading, setLoading] = useState(true);
  const [purchaseComplete, setPurchaseComplete] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const handlePurchaseComplete = () => {
    setPurchaseComplete(true);
    clearCart();
  };

  if (loading) {
    return <p className="loading-message">Cargando carrito...</p>;
  }
  
  if (purchaseComplete) {
    return (
      <p className="purchase-complete-message">
        ¡Gracias por tu compra! Tu pedido ha sido procesado correctamente.
      </p>
    );
  }
  
  if (cart.length === 0) {
    return <p className="empty-cart-message">No hay productos en el carrito</p>;
  }

  return (
    <div className="cart">
      <h2>Carrito de Compras</h2>
      <div>
        {cart.map((item) => (
          <div key={item.id} className="cart-item">
            <img src={item.image} alt={item.name} />
            <p>{item.name}</p>
            <p>Cantidad: {item.quantity}</p>
            <p>Precio unitario: ${item.price}</p>
            <p>Subtotal: ${item.price * item.quantity}</p>
            <button onClick={() => removeFromCart(item.id)}>Eliminar</button>
          </div>
        ))}
      </div>
      <div>
        <h3>Total: ${getTotal()}</h3>
        <button onClick={clearCart} className="clear-cart-button">
          Vaciar Carrito
        </button>
      </div>
      <div>
        <CheckoutForm onPurchaseComplete={handlePurchaseComplete} />
      </div>
    </div>
  );
};

export default Cart;