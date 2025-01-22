// eslint-disable-next-line no-unused-vars
import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import '../styles/cart.css';


const CartContent = () => {
    const { cartItems, removeItemFromCart, clearCart } = useContext(CartContext); // Extraemos el contexto

    const handleRemove = (productId) => {
        removeItemFromCart(productId);
    };

    return (
        <div className="cart-container">
            <h2>Carrito de Compras</h2>

            {cartItems.length === 0 ? (
                <p>El carrito está vacío.</p>
            ) : (
                <div>
                    <ul className="cart-items">
                        {cartItems.map((item) => (
                            <li key={item.id} className="cart-item">
                                <div className="cart-item-details">
                                    <h3>{item.name}</h3>
                                    <p>Precio: ${item.price}</p>
                                    <button onClick={() => handleRemove(item.id)}>Eliminar</button>
                                </div>
                            </li>
                        ))}
                    </ul>

                    <div className="cart-summary">
                        <p>Total: ${cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0)}</p>
                        <button onClick={clearCart}>Vaciar carrito</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CartContent;
