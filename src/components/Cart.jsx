// eslint-disable-next-line no-unused-vars
import React from 'react';
import { useCart } from '../context/CartContext'; // Usa solo el hook useCart

const Cart = () => {
    const { cart, removeFromCart } = useCart(); // Aquí usamos useCart para acceder al contexto

    const handleRemove = (productId) => {
        removeFromCart(productId); // Llamada a la función removeFromCart
    };

    return (
        <div className="cart-container">
            <h2 className="cart-title">Carrito</h2>
            {cart.length === 0 ? (
                <p className="cart-empty">No hay productos en el carrito.</p>
            ) : (
                <ul className="cart-list">
                    {cart.map((item) => (
                        <li key={item.id} className="cart-item">
                            <h3 className="cart-item-title">{item.name}</h3>
                            <p className="cart-item-price">Precio: ${item.price}</p>
                            <button 
                                className="cart-item-remove" 
                                onClick={() => handleRemove(item.id)}>
                                Eliminar
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Cart;
