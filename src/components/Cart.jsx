// eslint-disable-next-line no-unused-vars
import React from 'react';
import { useCart } from '../context/CartContext'; // Usa solo el hook useCart

const Cart = () => {
    const { cart, removeFromCart } = useCart(); // Aquí usamos useCart para acceder al contexto

    const handleRemove = (productId) => {
        removeFromCart(productId); // Llamada a la función removeFromCart
    };

    return (
        <div>
            <h2>Carrito</h2>
            {cart.length === 0 ? (
                <p>No hay productos en el carrito.</p>
            ) : (
                <ul>
                    {cart.map((item) => (
                        <li key={item.id}>
                            <h3>{item.name}</h3>
                            <p>Precio: ${item.price}</p>
                            <button onClick={() => handleRemove(item.id)}>Eliminar</button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Cart;
