// eslint-disable-next-line no-unused-vars
import React from 'react';
import { useCart } from '../context/CartContext';
import CheckoutForm from './CheckoutForm'; // Importamos el nuevo formulario
import '../styles/cart.css';

const Cart = () => {
  const { cart, getTotal, removeFromCart, clearCart } = useCart();

  if (cart.length === 0) {
    return <p>No hay productos en el carrito</p>;
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
        <CheckoutForm />
      </div>
    </div>
  );
};

export default Cart;