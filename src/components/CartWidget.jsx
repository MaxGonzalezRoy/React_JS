// eslint-disable-next-line no-unused-vars
import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import '../styles/cart.css';


const CartWidget = () => {
    const { getTotalItems } = useContext(CartContext);

    return (
        <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
            <img src="https://img.icons8.com/ios-filled/50/shopping-cart.png" alt="Carrito de compras" style={{ width: '24px' }} />
            <span style={{ backgroundColor: 'red', color: 'white', borderRadius: '50%', padding: '5px 10px' }}>
                {getTotalItems()}
            </span>
        </div>
    );
};

export default CartWidget;
