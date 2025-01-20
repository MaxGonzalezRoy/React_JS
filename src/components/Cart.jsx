import React from 'react';
import { useCart } from '../context/CartContext'; // Asegúrate de importar correctamente

const Cart = () => {
  const { cart, addToCart, removeFromCart, clearCart } = useCart(); // Usar el hook useCart

    return (
    <div>
        <h2>Carrito de Compras</h2>
        <ul>
        {cart.length === 0 ? (
            <p>El carrito está vacío</p>
        ) : (
            cart.map((product) => (
            <li key={product.id}>
                <span>{product.name}</span>
                <button onClick={() => removeFromCart(product.id)}>Eliminar</button>
            </li>
            ))
        )}
        </ul>
        {cart.length > 0 && <button onClick={clearCart}>Vaciar carrito</button>}
    </div>
    );
};

export default Cart;