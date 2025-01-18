import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const CartList = () => {
    const { cartItems } = useContext(CartContext);

    return (
        <div>
            <h2>Tu Carrito</h2>
            {cartItems.length === 0 ? (
                <p>El carrito está vacío</p>
            ) : (
                <ul>
                    {cartItems.map((item, index) => (
                        <li key={index}>
                            <div>{item.name}</div>
                            <div>${item.price}</div>
                            <div>Cantidad: {item.quantity}</div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default CartList;
