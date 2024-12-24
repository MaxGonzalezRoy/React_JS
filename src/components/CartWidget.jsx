import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import CartWidget from './CartWidget'
import { useState, useEffect } from 'react'
import { fetchData } from './api'

const CartWidget = () => {
    const [cartCount, setCartCount] = useState(0);

    useEffect(() => {
    fetchData('/cart')
        .then((data) => {
        setCartCount(data.totalItems || 0);
        })
        .catch((error) => console.error('Error fetching cart data:', error));
    }, []);

    return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
        <img 
        src="https://img.icons8.com/ios-filled/50/shopping-cart.png" 
        alt="Carrito de compras" 
        style={{ width: '24px' }}
        />
        <span 
        style={{ backgroundColor: 'red', color: 'white', borderRadius: '50%', padding: '5px 10px' }}>
        {cartCount}
        </span>
    </div>
    );
};

export default CartWidget;
